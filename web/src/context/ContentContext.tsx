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
      setCollections({ camps, events, team, partners, projects, jobs, agb, privacy, imprint, contact, landing, galleryItems })
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
