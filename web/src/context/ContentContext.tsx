import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Camp, ContactInfo, Event, GalleryItem, Job, LandingContent, LegalDocument, Partner, Project, TeamMember } from '../types/content'
import {
  fetchAgbDocument,
  fetchCamps,
  fetchContactInfo,
  fetchEvents,
  fetchGalleryItems,
  fetchImprintDocument,
  fetchJobs,
  fetchLandingContent,
  fetchPartners,
  fetchPrivacyDocument,
  fetchProjects,
  fetchTeam,
} from '../services/strapiClient'

type CollectionsState = {
  camps: Camp[]
  events: Event[]
  team: TeamMember[]
  partners: Partner[]
  projects: Project[]
  jobs: Job[]
  agb?: LegalDocument
  privacy?: LegalDocument
  imprint?: LegalDocument
  contact?: ContactInfo
  landing?: LandingContent
  galleryItems: GalleryItem[]
}

export type ContentValue = CollectionsState & {
  loading: boolean
  error?: string
  refetch: () => Promise<void>
}

const ContentContext = createContext<ContentValue | undefined>(undefined)

const initialCollections: CollectionsState = {
  camps: [],
  events: [],
  team: [],
  partners: [],
  projects: [],
  jobs: [],
  agb: undefined,
  privacy: undefined,
  imprint: undefined,
  contact: undefined,
  landing: undefined,
  galleryItems: [],
}

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [collections, setCollections] = useState<CollectionsState>(initialCollections)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | undefined>(undefined)

  const parseCampStartDate = (dateRange: string) => {
    const normalized = dateRange.replace(/[–—]/g, '-').replace(/\s+/g, ' ').trim().toLowerCase()

    const yearMatch = normalized.match(/(\d{4})/)
    const startDayMatch = normalized.match(/^(\d{1,2})/)
    const numericMatch = normalized.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/)

    let day = startDayMatch ? Number(startDayMatch[1]) : undefined
    let month: number | undefined
    let year = yearMatch ? Number(yearMatch[1]) : undefined

    if (numericMatch) {
      month = Number(numericMatch[2])
      year = Number(numericMatch[3])
      if (!day) {
        day = Number(numericMatch[1])
      }
    } else {
      const monthMap: Record<string, number> = {
        januar: 1,
        februar: 2,
        märz: 3,
        maerz: 3,
        april: 4,
        mai: 5,
        juni: 6,
        juli: 7,
        august: 8,
        september: 9,
        oktober: 10,
        november: 11,
        dezember: 12,
      }
      const monthMatch = normalized.match(/(januar|februar|märz|maerz|april|mai|juni|juli|august|september|oktober|november|dezember)/)
      if (monthMatch) {
        month = monthMap[monthMatch[1]]
      }
    }

    if (!day || !month || !year) {
      return Number.POSITIVE_INFINITY
    }

    return new Date(year, month - 1, day).getTime()
  }

  const sortCampsByDate = (items: Camp[]) =>
    [...items].sort((a, b) => parseCampStartDate(a.dateRange) - parseCampStartDate(b.dateRange))

  const loadContent = useCallback(async () => {
    setLoading(true)
    setError(undefined)
    try {
      const [
        camps,
        events,
        team,
        partners,
        projects,
        jobs,
        agb,
        privacy,
        imprint,
        contact,
        landing,
        galleryItems,
      ] = await Promise.all([
        fetchCamps(),
        fetchEvents(),
        fetchTeam(),
        fetchPartners(),
        fetchProjects(),
        fetchJobs(),
        fetchAgbDocument(),
        fetchPrivacyDocument(),
        fetchImprintDocument(),
        fetchContactInfo(),
        fetchLandingContent(),
        fetchGalleryItems(),
      ])
      setCollections({
        camps: sortCampsByDate(camps),
        events,
        team,
        partners,
        projects,
        jobs,
        agb,
        privacy,
        imprint,
        contact,
        landing,
        galleryItems,
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Inhalte konnten nicht geladen werden.'
      setError(message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadContent()
  }, [loadContent])

  return (
    <ContentContext.Provider value={{ ...collections, loading, error, refetch: loadContent }}>
      {children}
    </ContentContext.Provider>
  )
}

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}
