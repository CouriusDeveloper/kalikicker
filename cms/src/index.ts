import type { Core } from '@strapi/strapi'
import {
  campSeedData,
  eventSeedData,
  jobSeedData,
  partnerSeedData,
  projectSeedData,
  teamSeedData,
} from './data/seed-data'

type SeedContext = {
  strapi: Core.Strapi
}

const PERMISSIONS_TO_ENABLE = [
  'api::camp.camp.find',
  'api::camp.camp.findOne',
  'api::event.event.find',
  'api::event.event.findOne',
  'api::team-member.team-member.find',
  'api::team-member.team-member.findOne',
  'api::partner.partner.find',
  'api::partner.partner.findOne',
  'api::project.project.find',
  'api::project.project.findOne',
  'api::job.job.find',
  'api::job.job.findOne',
]

type EntityWithId = { id: number }

const ensureEntryBySlug = async (
  strapi: Core.Strapi,
  uid: string,
  slug: string,
  data: Record<string, unknown>
): Promise<EntityWithId> => {
  const existing = await strapi.db.query(uid as never).findOne({ where: { slug } })
  if (existing) {
    return existing as EntityWithId
  }

  return (await strapi.entityService.create(uid as never, { data })) as EntityWithId
}

const seedContent = async (strapi: Core.Strapi) => {
  const campUid = 'api::camp.camp'
  const eventUid = 'api::event.event'
  const teamUid = 'api::team-member.team-member'
  const partnerUid = 'api::partner.partner'
  const projectUid = 'api::project.project'
  const jobUid = 'api::job.job'

  const campMap = new Map<string, number>()

  for (const camp of campSeedData) {
    const entry = await ensureEntryBySlug(strapi, campUid, camp.slug, {
      title: camp.title,
      slug: camp.slug,
      season: camp.season,
      dateRange: camp.dateRange,
      location: camp.location,
      venue: camp.venue,
      ageGroup: camp.ageGroup,
      description: camp.description,
      price: camp.price,
      spots: camp.spots,
      badge: camp.badge,
      heroImage: camp.heroImage,
      services: camp.services.map((value) => ({ value })),
      schedule: camp.schedule,
      highlights: camp.highlights.map((value) => ({ value })),
    })

    campMap.set(camp.slug, entry.id)
  }

  for (const event of eventSeedData) {
    await ensureEntryBySlug(strapi, eventUid, event.slug, {
      title: event.title,
      slug: event.slug,
      date: event.date,
      location: event.location,
      ageGroup: event.ageGroup,
      status: event.status,
      camp: event.campSlug ? campMap.get(event.campSlug) ?? null : null,
    })
  }

  for (const member of teamSeedData) {
    await ensureEntryBySlug(strapi, teamUid, member.slug, {
      name: member.name,
      slug: member.slug,
      role: member.role,
      qualification: member.qualification,
      statement: member.statement,
      photo: member.photo,
    })
  }

  for (const partner of partnerSeedData) {
    await ensureEntryBySlug(strapi, partnerUid, partner.slug, {
      name: partner.name,
      slug: partner.slug,
      logo: partner.logo,
      description: partner.description,
      url: partner.url,
    })
  }

  for (const project of projectSeedData) {
    await ensureEntryBySlug(strapi, projectUid, project.slug, {
      name: project.name,
      slug: project.slug,
      description: project.description,
      impact: project.impact,
      logo: project.logo,
    })
  }

  for (const job of jobSeedData) {
    await ensureEntryBySlug(strapi, jobUid, job.slug, {
      title: job.title,
      slug: job.slug,
      type: job.type,
      location: job.location,
      summary: job.summary,
      requirements: job.requirements.map((value) => ({ value })),
      email: job.email,
    })
  }
}

const enablePublicPermissions = async (strapi: Core.Strapi) => {
  type PermissionRecord = { id: number; action: string; enabled: boolean }

  const publicRole = (await strapi.db.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
    populate: ['permissions'],
  })) as { id: number; permissions?: PermissionRecord[] } | null

  if (!publicRole) {
    strapi.log.warn('Public role not found – cannot auto-enable REST permissions')
    return
  }

  const existingPermissions = new Map(
    (publicRole.permissions ?? []).map((permission) => [permission.action, permission])
  )

  for (const action of PERMISSIONS_TO_ENABLE) {
    const permission = existingPermissions.get(action)
    if (permission) {
      if (!permission.enabled) {
        await strapi.db.query('plugin::users-permissions.permission').update({
          where: { id: permission.id },
          data: { enabled: true },
        })
      }
      continue
    }

    await strapi.db.query('plugin::users-permissions.permission').create({
      data: {
        action,
        role: publicRole.id,
        enabled: true,
      },
    })
  }
}

export default {
  register(/* { strapi }: SeedContext */) {},
  async bootstrap({ strapi }: SeedContext) {
    await seedContent(strapi)
    await enablePublicPermissions(strapi)
  },
}
