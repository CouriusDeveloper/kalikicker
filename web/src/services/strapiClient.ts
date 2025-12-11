import type { Camp, ContactInfo, Event, GalleryItem, Job, LandingContent, LegalDocument, Partner, Project, TeamMember } from '../types/content'

type TextComponent = { id?: number; value?: string | null }
type ScheduleComponent = { id?: number; time?: string | null; activity?: string | null }

type RelationData<T> = {
	data: {
		id: number
		attributes: T
	} | null
}

type CampAttributes = Omit<Camp, 'id' | 'services' | 'schedule' | 'highlights'> & {
	slug: string
	services?: TextComponent[] | null
	schedule?: ScheduleComponent[] | null
	highlights?: TextComponent[] | null
}

type EventAttributes = Omit<Event, 'id' | 'campId'> & {
	slug: string
	camp?: RelationData<CampAttributes>
}

type TeamAttributes = Omit<TeamMember, 'id'> & { slug: string }
type PartnerAttributes = Omit<Partner, 'id'> & { slug: string }
type ProjectAttributes = Omit<Project, 'id'> & { slug: string }
type JobAttributes = Omit<Job, 'id' | 'requirements'> & {
	slug: string
	requirements?: TextComponent[] | null
}

type MediaAttributes = {
	url: string
	alternativeText?: string | null
}

type MediaField = {
	data: {
		attributes: MediaAttributes
	} | null
}

type LegalSectionAttributes = {
	heading?: string | null
	body?: string | null
}

type LegalDocumentAttributes = {
	title: string
	stand?: string | null
	sections?: LegalSectionAttributes[] | null
}

type ContactAttributes = {
	companyName: string
	tagline?: string | null
	address: string
	phone?: string | null
	email?: string | null
	officeHours?: string | null
	footerNote?: string | null
	instagram?: string | null
	facebook?: string | null
}

type LandingAttributes = {
	heroKicker?: string | null
	heroTitle?: string | null
	heroSubtitle?: string | null
	heroPrimaryLabel?: string | null
	heroPrimaryUrl?: string | null
	heroSecondaryLabel?: string | null
	heroSecondaryUrl?: string | null
	heroImage?: MediaField | null
}

type GalleryItemAttributes = {
	title: string
	slug: string
	location?: string | null
	year?: string | null
	image?: MediaField | null
}

type StrapiEntry<T> =
	| {
		id: number
		attributes: T
		[key: string]: unknown
	}
	| (T & { id: number })

const unwrapEntry = <T>(entry: StrapiEntry<T>): T =>
	'attributes' in entry ? entry.attributes : entry

type CollectionResponse<T> = {
	data: Array<StrapiEntry<T>>
}

type SingleResponse<T> = {
	data: StrapiEntry<T> | null
}

const DEFAULT_STRAPI_URL = 'https://upbeat-bear-69c2408fc9.strapiapp.com'

export const STRAPI_URL = (
	import.meta.env.VITE_STRAPI_URL ||
	DEFAULT_STRAPI_URL
).replace(/\/$/, '')

const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN

const request = async <T>(path: string, configureParams?: (params: URLSearchParams) => void) => {
	const url = new URL(path.startsWith('/') ? path : `/${path}`, STRAPI_URL)
	if (configureParams) {
		const params = new URLSearchParams()
		configureParams(params)
		params.forEach((value, key) => {
			url.searchParams.append(key, value)
		})
	}

	const headers: Record<string, string> = {}
	if (STRAPI_TOKEN) {
		headers.Authorization = `Bearer ${STRAPI_TOKEN}`
	}

	const response = await fetch(url.toString(), { headers })
	if (!response.ok) {
		throw new Error(`Strapi request failed (${response.status})`)
	}
	return (await response.json()) as T
}

const resolveMediaUrl = (media?: MediaField | { url?: string | null } | null) => {
	const directUrl = (media as { url?: string | null } | undefined)?.url
	const nestedUrl = (media as MediaField | undefined)?.data?.attributes?.url
	const url = directUrl ?? nestedUrl
	if (!url) {
		return undefined
	}
	return url.startsWith('http') ? url : `${STRAPI_URL}${url}`
}

const extractText = (items?: TextComponent[] | null) =>
	(items ?? [])
		.map((item) => item.value?.trim())
		.filter((value): value is string => Boolean(value))

const extractSchedule = (items?: ScheduleComponent[] | null) =>
	(items ?? [])
		.map((item) => ({ time: item.time ?? '', activity: item.activity ?? '' }))
		.filter((entry) => entry.time && entry.activity)

const mapCamp = (entry: StrapiEntry<CampAttributes>) => {
	const attributes = unwrapEntry(entry)
	return {
		id: attributes.slug,
		title: attributes.title,
		season: attributes.season,
		dateRange: attributes.dateRange,
		location: attributes.location,
		venue: attributes.venue,
		ageGroup: attributes.ageGroup,
		description: attributes.description,
		price: attributes.price,
		spots: attributes.spots,
		badge: attributes.badge ?? undefined,
		heroImage: attributes.heroImage,
		services: extractText(attributes.services),
		schedule: extractSchedule(attributes.schedule),
		highlights: extractText(attributes.highlights),
	}
}

const mapEvent = (entry: StrapiEntry<EventAttributes>) => {
	const attributes = unwrapEntry(entry)
	return {
		id: attributes.slug,
		title: attributes.title,
		date: attributes.date,
		location: attributes.location,
		ageGroup: attributes.ageGroup,
		status: attributes.status,
		campId: attributes.camp?.data?.attributes.slug,
	}
}

const mapTeamMember = (entry: StrapiEntry<TeamAttributes>) => {
	const attributes = unwrapEntry(entry)
	return {
		id: attributes.slug,
		name: attributes.name,
		role: attributes.role,
		qualification: attributes.qualification,
		statement: attributes.statement,
		photo: attributes.photo,
	}
}

const mapPartner = (entry: StrapiEntry<PartnerAttributes>) => {
	const attributes = unwrapEntry(entry)
	return {
		id: attributes.slug,
		name: attributes.name,
		logo: attributes.logo,
		description: attributes.description,
		url: attributes.url ?? undefined,
	}
}

const mapProject = (entry: StrapiEntry<ProjectAttributes>) => {
	const attributes = unwrapEntry(entry)
	return {
		id: attributes.slug,
		name: attributes.name,
		description: attributes.description,
		impact: attributes.impact,
		logo: attributes.logo,
		url: attributes.url ?? undefined,
	}
}

const mapJob = (entry: StrapiEntry<JobAttributes>) => {
	const attributes = unwrapEntry(entry)
	return {
		id: attributes.slug,
		title: attributes.title,
		type: attributes.type,
		location: attributes.location,
		summary: attributes.summary,
		requirements: extractText(attributes.requirements),
		email: attributes.email,
	}
}

const mapLegalDocument = (entry: StrapiEntry<LegalDocumentAttributes> | null): LegalDocument | undefined => {
	if (!entry) {
		return undefined
	}
	const attributes = unwrapEntry(entry)
	const sections = (attributes.sections ?? [])
		.map((section) => ({
			heading: section.heading?.trim() ?? '',
			body: section.body?.trim() ?? '',
		}))
		.filter((section) => section.heading || section.body)

	return {
		title: attributes.title,
		stand: attributes.stand ?? undefined,
		sections,
	}
}

const mapContactInfo = (entry: StrapiEntry<ContactAttributes> | null): ContactInfo | undefined => {
	if (!entry) {
		return undefined
	}
	const attributes = unwrapEntry(entry)
	return {
		companyName: attributes.companyName,
		tagline: attributes.tagline ?? undefined,
		address: attributes.address,
		phone: attributes.phone ?? undefined,
		email: attributes.email ?? undefined,
		officeHours: attributes.officeHours ?? undefined,
		footerNote: attributes.footerNote ?? undefined,
		instagram: attributes.instagram ?? undefined,
		facebook: attributes.facebook ?? undefined,
	}
}

const mapLandingContent = (entry: StrapiEntry<LandingAttributes> | null): LandingContent | undefined => {
	if (!entry) {
		return undefined
	}
	const attributes = unwrapEntry(entry)
	return {
		heroKicker: attributes.heroKicker ?? undefined,
		heroTitle: attributes.heroTitle ?? undefined,
		heroSubtitle: attributes.heroSubtitle ?? undefined,
		heroPrimaryLabel: attributes.heroPrimaryLabel ?? undefined,
		heroPrimaryUrl: attributes.heroPrimaryUrl ?? undefined,
		heroSecondaryLabel: attributes.heroSecondaryLabel ?? undefined,
		heroSecondaryUrl: attributes.heroSecondaryUrl ?? undefined,
		heroImage: resolveMediaUrl(attributes.heroImage) ?? undefined,
	}
}

const mapGalleryItem = (entry: StrapiEntry<GalleryItemAttributes>): GalleryItem => {
	const attributes = unwrapEntry(entry)
	return {
		id: attributes.slug,
		title: attributes.title,
		location: attributes.location ?? undefined,
		year: attributes.year ?? undefined,
		image: resolveMediaUrl(attributes.image) ?? undefined,
	}
}

export type BookingRequestPayload = {
	campId: string
	campTitle?: string
	campDateRange?: string
	campLocation?: string
	campPrice?: number
	childFirstName: string
	childLastName: string
	birthdate: string
	gender: string
	parentEmail: string
	parentPhone: string
	jerseySize: string
	wantsPrint: string
	printInfo?: string
	wantsShorts: string
	shortSize?: string
	wantsSocks: string
	wantsGloves: string
	gloveSize?: string
	earlyCare: string
	notes?: string
	acceptAgb: boolean
	acceptPrivacy: boolean
	subscribeNewsletter: boolean
}

export const submitBookingRequest = async (payload: BookingRequestPayload) => {
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
	}
	if (STRAPI_TOKEN) {
		headers.Authorization = `Bearer ${STRAPI_TOKEN}`
	}

	const response = await fetch(`${STRAPI_URL}/api/booking-request`, {
		method: 'POST',
		headers,
		body: JSON.stringify(payload),
	})

	const data = await response.json().catch(() => ({}))

	if (!response.ok) {
		const message = data?.error?.message || data?.message || 'Die Buchung konnte nicht gesendet werden.'
		throw new Error(message)
	}

	return data
}

export const fetchCamps = async () => {
	const result = await request<CollectionResponse<CampAttributes>>('/api/camps', (params) => {
		params.append('sort[0]', 'dateRange:asc')
		params.append('populate[services]', '*')
		params.append('populate[schedule]', '*')
		params.append('populate[highlights]', '*')
	})
	return result.data.map(mapCamp)
}

export const fetchEvents = async () => {
	const result = await request<CollectionResponse<EventAttributes>>('/api/events', (params) => {
		params.append('sort[0]', 'date:asc')
		// Populate linked camp so we can surface the slug
		params.append('populate', 'camp')
	})
	return result.data.map(mapEvent)
}

export const fetchTeam = async () => {
	const result = await request<CollectionResponse<TeamAttributes>>('/api/team-members', (params) => {
		params.append('sort[0]', 'name:asc')
	})
	return result.data.map(mapTeamMember)
}

export const fetchPartners = async () => {
	const result = await request<CollectionResponse<PartnerAttributes>>('/api/partners', (params) => {
		params.append('sort[0]', 'name:asc')
	})
	return result.data.map(mapPartner)
}

export const fetchProjects = async () => {
	const result = await request<CollectionResponse<ProjectAttributes>>('/api/projects', (params) => {
		params.append('sort[0]', 'name:asc')
	})
	return result.data.map(mapProject)
}

export const fetchJobs = async () => {
	const result = await request<CollectionResponse<JobAttributes>>('/api/jobs', (params) => {
		params.append('sort[0]', 'title:asc')
		params.append('populate[requirements]', '*')
	})
	return result.data.map(mapJob)
}

export const fetchAgbDocument = async () => {
	const result = await request<SingleResponse<LegalDocumentAttributes>>('/api/agb', (params) => {
		params.append('populate[sections]', '*')
	})
	return mapLegalDocument(result.data)
}

export const fetchPrivacyDocument = async () => {
	const result = await request<SingleResponse<LegalDocumentAttributes>>('/api/datenschutz', (params) => {
		params.append('populate[sections]', '*')
	})
	return mapLegalDocument(result.data)
}

export const fetchImprintDocument = async () => {
	const result = await request<SingleResponse<LegalDocumentAttributes>>('/api/impressum', (params) => {
		params.append('populate[sections]', '*')
	})
	return mapLegalDocument(result.data)
}

export const fetchContactInfo = async () => {
	const result = await request<SingleResponse<ContactAttributes>>('/api/contact')
	return mapContactInfo(result.data)
}

export const fetchLandingContent = async () => {
	const result = await request<SingleResponse<LandingAttributes>>('/api/landing', (params) => {
		params.append('populate', 'heroImage')
	})
	return mapLandingContent(result.data)
}

export const fetchGalleryItems = async () => {
	const result = await request<CollectionResponse<GalleryItemAttributes>>('/api/gallery-items', (params) => {
		params.append('sort[0]', 'createdAt:desc')
		params.append('populate', 'image')
	})
	return result.data.map(mapGalleryItem)
}
