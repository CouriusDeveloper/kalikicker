import type { Camp, Event, Job, Partner, Project, TeamMember } from '../types/content'

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

const DEFAULT_STRAPI_URL = 'https://upbeat-bear-69c2408fc9.strapiapp.com'

export const STRAPI_URL = (
	import.meta.env.VITE_STRAPI_URL ||
	DEFAULT_STRAPI_URL
).replace(/\/$/, '')

const request = async <T>(path: string, configureParams?: (params: URLSearchParams) => void) => {
	const url = new URL(path.startsWith('/') ? path : `/${path}`, STRAPI_URL)
	if (configureParams) {
		const params = new URLSearchParams()
		configureParams(params)
		params.forEach((value, key) => {
			url.searchParams.append(key, value)
		})
	}

	const response = await fetch(url.toString())
	if (!response.ok) {
		throw new Error(`Strapi request failed (${response.status})`)
	}
	return (await response.json()) as T
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
	const response = await fetch(`${STRAPI_URL}/api/booking-request`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
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
