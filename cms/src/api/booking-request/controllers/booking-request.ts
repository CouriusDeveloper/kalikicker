// @ts-nocheck
import type { Context } from 'koa'

const MAIL_FROM = 'info@web-loop.de'
const BOOKING_NOTIFY_TO = 'beckerfynn@icloud.com'
const SUPPORT_BCC = ['info@web-loop.de']

const requiredFields = [
  'campId',
  'childFirstName',
  'childLastName',
  'birthdate',
  'gender',
  'parentEmail',
  'parentPhone',
  'jerseySize',
]

const normalizeString = (value: unknown) => (typeof value === 'string' ? value.trim() : '')
const valueToString = (value: unknown) => {
  if (value === null || value === undefined) {
    return ''
  }
  if (typeof value === 'string') {
    return value
  }
  return String(value)
}
const escapeHtml = (value: unknown) =>
  valueToString(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const formatCampReference = (payload) => {
  const label = payload.campTitle || payload.campId || 'Unbekanntes Camp'
  const date = payload.campDateRange ? ` (${payload.campDateRange})` : ''
  return `${label}${date}`
}

const parsePriceValue = (value: unknown) => {
  const numberValue = Number(value)
  return Number.isFinite(numberValue) ? numberValue : null
}

const formatPrice = (value: unknown, fallback = '') => {
  const numberValue = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(numberValue)) {
    return fallback
  }
  try {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(numberValue)
  } catch (error) {
    return `${numberValue} €`
  }
}

const EXTRA_PRICES = {
  wantsPrint: { label: 'Wunschbedruckung', amount: 20 },
  wantsShorts: { label: 'Hose', amount: 15 },
  wantsSocks: { label: 'Stutzen', amount: 10 },
  wantsGloves: { label: 'Handschuhe', amount: 20 },
} as const

const collectSelectedExtras = (payload) => {
  const extras = []
  if (payload.wantsPrint === 'Ja') {
    extras.push(EXTRA_PRICES.wantsPrint)
  }
  if (payload.wantsShorts === 'Ja') {
    extras.push(EXTRA_PRICES.wantsShorts)
  }
  if (payload.wantsSocks === 'Ja') {
    extras.push(EXTRA_PRICES.wantsSocks)
  }
  if (payload.wantsGloves === 'Ja') {
    extras.push(EXTRA_PRICES.wantsGloves)
  }
  return extras
}

const buildPriceBreakdown = (payload) => {
  const basePrice = parsePriceValue(payload.campPrice)
  const extras = collectSelectedExtras(payload)
  const extrasTotal = extras.reduce((sum, extra) => sum + extra.amount, 0)
  const total = basePrice !== null ? basePrice + extrasTotal : null

  return {
    basePrice,
    extras,
    extrasTotal,
    total,
    hasBasePrice: basePrice !== null,
  }
}

const buildPlainTextBody = (payload) => {
  const priceBreakdown = buildPriceBreakdown(payload)
  const basePriceText = formatPrice(priceBreakdown.basePrice, 'Auf Anfrage')
  const extrasLines =
    priceBreakdown.extras.length > 0
      ? priceBreakdown.extras.map((extra) => `  ◦ ${extra.label}: ${formatPrice(extra.amount)}`)
      : ['  ◦ Keine Zusatzoptionen']
  const totalText = priceBreakdown.total !== null ? formatPrice(priceBreakdown.total) : 'Auf Anfrage'

  const lines = [
    'Neue Buchungsanfrage über das Website-Formular:',
    '',
    `Camp: ${formatCampReference(payload)}`,
    payload.campLocation ? `Ort: ${payload.campLocation}` : null,
    `Grundpreis: ${basePriceText}`,
    `Frühbetreuung: ${payload.earlyCare || 'Keine Angabe'}`,
    '',
    'Kostenübersicht:',
    `• Grundpreis: ${basePriceText}`,
    '• Zusatzoptionen:',
    ...extrasLines,
    `• Gesamtbetrag: ${totalText}`,
    '',
    'Kind:',
    `• Name: ${payload.childFirstName} ${payload.childLastName}`,
    `• Geburtsdatum: ${payload.birthdate}`,
    `• Geschlecht: ${payload.gender}`,
    '',
    'Kontakt Eltern:',
    `• E-Mail: ${payload.parentEmail}`,
    `• Telefon: ${payload.parentPhone}`,
    '',
    'Ausstattung:',
    `• Trikotgröße: ${payload.jerseySize}`,
    `• Wunschbedruckung: ${payload.wantsPrint}${payload.wantsPrint === 'Ja' && payload.printInfo ? ` – ${payload.printInfo}` : ''}`,
    `• Hose gewünscht: ${payload.wantsShorts}${payload.wantsShorts === 'Ja' && payload.shortSize ? ` – Größe ${payload.shortSize}` : ''}`,
    `• Stutzen: ${payload.wantsSocks}`,
    `• Handschuhe: ${payload.wantsGloves}${payload.wantsGloves === 'Ja' && payload.gloveSize ? ` – Größe ${payload.gloveSize}` : ''}`,
    '',
    'Bestätigungen:',
    `• AGB akzeptiert: ${payload.acceptAgb ? 'Ja' : 'Nein'}`,
    `• Datenschutz akzeptiert: ${payload.acceptPrivacy ? 'Ja' : 'Nein'}`,
    `• Newsletter: ${payload.subscribeNewsletter ? 'Ja' : 'Nein'}`,
    '',
    `Weitere Infos: ${payload.notes || 'Keine Angaben'}`,
  ]

  return lines.filter(Boolean).join('\n')
}

const buildHtmlBody = (payload) => {
  const mutedColor = '#6B7280'
  const borderColor = '#E4F2ED'
  const primaryColor = '#205645'
  const backgroundColor = '#F9FBFA'
  const accentColor = '#FFB347'
  const deepAccent = '#174034'

  const fallbackMuted = `<span style="color:${mutedColor};">Keine Angaben</span>`

  const infoChip = (label: string, value?: string) => {
    if (!value) {
      return ''
    }
    return `
      <span style="display:inline-flex; align-items:center; gap:6px; padding:6px 12px; border-radius:999px; background:rgba(255,255,255,0.16); color:#fff; font-size:13px;">
        <span style="opacity:0.75;">${escapeHtml(label)}:</span>
        <strong>${escapeHtml(value)}</strong>
      </span>
    `
  }

  const metricCard = (label: string, value: string) => `
    <div style="flex:1; min-width:140px; background:#fff; border:1px solid ${borderColor}; border-radius:18px; padding:16px 20px; box-shadow:0 10px 25px rgba(23,64,52,0.08);">
      <p style="margin:0; font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:${mutedColor};">${escapeHtml(label)}</p>
      <p style="margin:6px 0 0; font-size:18px; color:${primaryColor}; font-weight:700;">${escapeHtml(value)}</p>
    </div>
  `

  const sectionHeading = (title: string, subtitle?: string) => `
    <div style="padding:28px 32px 12px;">
      <p style="margin:0; text-transform:uppercase; letter-spacing:0.12em; font-size:11px; color:${mutedColor};">${escapeHtml(title)}</p>
      ${subtitle ? `<h3 style="margin:4px 0 0; font-size:20px; color:${primaryColor};">${escapeHtml(subtitle)}</h3>` : ''}
    </div>
  `

  const renderRow = (label: string, value: string, { allowHtmlValue = false } = {}) => {
    if (!value) {
      return ''
    }
    const cellValue = allowHtmlValue ? value : escapeHtml(value)
    return `
      <tr>
        <td style="width:35%; padding:10px 32px; font-weight:600; color:${primaryColor}; border-top:1px solid ${borderColor}; background:#fff;">
          ${escapeHtml(label)}
        </td>
        <td style="padding:10px 32px; border-top:1px solid ${borderColor}; color:#1F2933; background:#fff;">
          ${cellValue}
        </td>
      </tr>
    `
  }

  const notesValue = normalizeString(payload.notes)
    ? escapeHtml(payload.notes).replace(/\n/g, '<br />')
    : fallbackMuted

  const priceBreakdown = buildPriceBreakdown(payload)
  const basePriceText = formatPrice(priceBreakdown.basePrice, 'Auf Anfrage')
  const totalPriceText = priceBreakdown.total !== null ? formatPrice(priceBreakdown.total) : 'Auf Anfrage'

  const extrasList = priceBreakdown.extras.length
    ? `<ul style="margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:8px;">
        ${priceBreakdown.extras
          .map(
            (extra) => `
              <li style="display:flex; align-items:center; justify-content:space-between; gap:12px; font-size:14px;">
                <span style="color:${primaryColor};">${escapeHtml(extra.label)}</span>
                <strong>${escapeHtml(formatPrice(extra.amount))}</strong>
              </li>
            `,
          )
          .join('')}
        <li style="margin-top:4px; padding-top:8px; border-top:1px dashed ${borderColor}; display:flex; justify-content:space-between; font-size:14px;">
          <span style="color:${mutedColor};">Summe Zusatzoptionen</span>
          <strong>${escapeHtml(formatPrice(priceBreakdown.extrasTotal))}</strong>
        </li>
      </ul>`
    : `<p style="margin:0; color:${mutedColor}; font-size:14px;">Keine Zusatzoptionen gewählt</p>`

  const campChips = [
    infoChip('Camp', formatCampReference(payload)),
    payload.campLocation ? infoChip('Ort', payload.campLocation) : '',
    infoChip('Grundpreis', basePriceText),
    infoChip('Frühbetreuung', payload.earlyCare || 'Keine Angabe'),
  ]
    .filter(Boolean)
    .join('')

  const metricRow = [
    metricCard('Trikotgröße', payload.jerseySize || '–'),
    metricCard('Wunschbedruckung', payload.wantsPrint === 'Ja' ? payload.printInfo || 'Ja' : 'Nein'),
    metricCard('Newsletter', payload.subscribeNewsletter ? 'Ja' : 'Nein'),
  ].join('')

  const priceSection =
    sectionHeading('Preisübersicht', 'Kosten im Überblick') +
    `
      <div style="padding:0 32px 32px;">
        <div style="display:flex; flex-wrap:wrap; gap:16px;">
          ${metricCard('Grundpreis', basePriceText)}
          ${metricCard('Gesamtbetrag', totalPriceText)}
        </div>
        <div style="margin-top:18px; background:#fff; border:1px solid ${borderColor}; border-radius:18px; padding:20px;">
          <p style="margin:0 0 10px; font-weight:600; color:${primaryColor};">Zusatzoptionen</p>
          ${extrasList}
        </div>
      </div>
    `

  const sections = [
    sectionHeading('Camp Insight', 'Rahmendaten') +
      `
        <table role="presentation" width="100%" style="border-collapse:collapse;">
          ${[
            renderRow('Camp', formatCampReference(payload)),
            payload.campDateRange ? renderRow('Zeitraum', payload.campDateRange) : '',
            renderRow('Ort', payload.campLocation || 'Noch offen'),
            renderRow('Grundpreis', basePriceText),
          ].join('')}
        </table>
      `,
    priceSection,
    sectionHeading('Teilnehmende Person', 'Kinderdaten') +
      `
        <table role="presentation" width="100%" style="border-collapse:collapse;">
          ${[
            renderRow('Name', `${payload.childFirstName} ${payload.childLastName}`.trim()),
            renderRow('Geburtsdatum', payload.birthdate),
            renderRow('Geschlecht', payload.gender),
          ].join('')}
        </table>
      `,
    sectionHeading('Kontakt', 'Erziehungsberechtigte') +
      `
        <table role="presentation" width="100%" style="border-collapse:collapse;">
          ${[
            renderRow('E-Mail', payload.parentEmail),
            renderRow('Telefon', payload.parentPhone),
          ].join('')}
        </table>
      `,
    sectionHeading('Ausstattung', 'Kit & Add-ons') +
      `
        <table role="presentation" width="100%" style="border-collapse:collapse;">
          ${[
            renderRow('Trikotgröße', payload.jerseySize),
            renderRow(
              'Wunschbedruckung',
              `${payload.wantsPrint}${payload.wantsPrint === 'Ja' && payload.printInfo ? ` – ${payload.printInfo}` : ''}`,
            ),
            renderRow(
              'Hose',
              `${payload.wantsShorts}${payload.wantsShorts === 'Ja' && payload.shortSize ? ` – Größe ${payload.shortSize}` : ''}`,
            ),
            renderRow('Stutzen', payload.wantsSocks),
            renderRow(
              'Handschuhe',
              `${payload.wantsGloves}${payload.wantsGloves === 'Ja' && payload.gloveSize ? ` – Größe ${payload.gloveSize}` : ''}`,
            ),
          ].join('')}
        </table>
      `,
    sectionHeading('Bestätigungen', 'Rechtliches') +
      `
        <table role="presentation" width="100%" style="border-collapse:collapse;">
          ${[
            renderRow('AGB akzeptiert', payload.acceptAgb ? 'Ja' : 'Nein'),
            renderRow('Datenschutz akzeptiert', payload.acceptPrivacy ? 'Ja' : 'Nein'),
            renderRow('Newsletter', payload.subscribeNewsletter ? 'Ja' : 'Nein'),
          ].join('')}
        </table>
      `,
    sectionHeading('Weitere Hinweise') +
      `
        <table role="presentation" width="100%" style="border-collapse:collapse;">
          ${renderRow('Hinweise', notesValue, { allowHtmlValue: true })}
        </table>
      `,
  ]

  return `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <title>Neue Camp-Buchung</title>
  </head>
  <body style="margin:0; padding:32px; background:${backgroundColor}; font-family:'Inter', 'Nunito', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color:#1F2933;">
    <div style="max-width:720px; margin:0 auto; background:#fff; border:1px solid ${borderColor}; border-radius:32px; box-shadow:0 25px 60px rgba(23, 64, 52, 0.18); overflow:hidden;">
      <header style="background:linear-gradient(135deg, ${primaryColor}, ${deepAccent}); color:#fff; padding:36px 40px 28px;">
        <p style="margin:0; text-transform:uppercase; letter-spacing:0.18em; font-size:12px; opacity:0.8;">KaLi-Kicker Buchung</p>
        <h1 style="margin:10px 0 0; font-size:30px;">Neue Camp-Anfrage</h1>
        <p style="margin:10px 0 0; color:rgba(255,255,255,0.85); font-size:15px;">eingegangen über das Web-Formular</p>
        <div style="margin-top:22px; display:flex; flex-wrap:wrap; gap:10px;">
          ${campChips || `<span style="color:rgba(255,255,255,0.75);">Keine Campdaten</span>`}
        </div>
      </header>
      <section style="padding:28px 40px; background:linear-gradient(135deg, rgba(32,86,69,0.08), rgba(255,179,71,0.12));">
        <div style="display:flex; flex-wrap:wrap; gap:16px;">
          ${metricRow}
        </div>
      </section>
      <section>
        ${sections.join('')}
      </section>
      <footer style="padding:26px 40px; background:${backgroundColor}; display:flex; align-items:center; justify-content:space-between; border-top:1px solid ${borderColor}; flex-wrap:wrap; gap:12px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="width:14px; height:14px; border-radius:50%; background:${accentColor}; box-shadow:0 0 10px rgba(255,179,71,0.6);"></div>
          <p style="margin:0; font-size:13px; color:${mutedColor};">Automatisiert versendet · Antwort an ${escapeHtml(payload.parentEmail)}</p>
        </div>
        <a href="mailto:${escapeHtml(payload.parentEmail)}" style="display:inline-flex; align-items:center; gap:8px; background:${primaryColor}; color:#fff; padding:10px 18px; border-radius:999px; text-decoration:none; font-weight:600; font-size:14px;">
          Direkt antworten
        </a>
      </footer>
    </div>
  </body>
</html>`
}

export default {
  async submit(ctx: Context) {
    const payload = ctx.request.body || {}

    const missing = requiredFields.filter((field) => !normalizeString(payload[field]))
    if (missing.length > 0) {
      return ctx.badRequest('Bitte fülle alle Pflichtfelder aus.', { missing })
    }

    if (!payload.acceptAgb || !payload.acceptPrivacy) {
      return ctx.badRequest('AGB und Datenschutz müssen bestätigt werden.')
    }

    const notifyTo = BOOKING_NOTIFY_TO
    const fromAddress = MAIL_FROM
    const subscriberEmail = normalizeString(payload.parentEmail)
    const toAddress = subscriberEmail || notifyTo
    const bccCandidates = [...SUPPORT_BCC, notifyTo]
    const bcc = Array.from(new Set(bccCandidates.filter((entry) => entry && entry !== toAddress)))

    const subject = `Neue Camp-Buchung – ${payload.childFirstName} ${payload.childLastName}`
    const textBody = buildPlainTextBody(payload)
    const htmlBody = buildHtmlBody(payload)

    try {
      await strapi.plugin('email').service('email').send({
        to: toAddress,
        bcc: bcc.length > 0 ? bcc : undefined,
        from: fromAddress,
        replyTo: payload.parentEmail,
        subject,
        text: textBody,
        html: htmlBody,
      })

      ctx.body = { ok: true }
    } catch (error) {
      strapi.log.error('Booking email failed', error)
      ctx.status = 500
      ctx.body = { error: { message: 'Buchung konnte nicht gesendet werden. Bitte später erneut versuchen.' } }
    }
  },
}
