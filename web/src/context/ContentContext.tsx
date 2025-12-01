import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Camp, Event, Job, Partner, Project, TeamMember } from '../types/content'
import { fetchCamps, fetchEvents, fetchJobs, fetchPartners, fetchProjects, fetchTeam } from '../services/strapiClient'

export type ContentValue = {
  camps: Camp[]
  events: Event[]
  team: TeamMember[]
  partners: Partner[]
  projects: Project[]
  jobs: Job[]
  loading: boolean
  error?: string
  refetch: () => Promise<void>
}

const ContentContext = createContext<ContentValue | undefined>(undefined)

const initialCollections = {
  camps: [] as Camp[],
  events: [] as Event[],
  team: [] as TeamMember[],
  partners: [] as Partner[],
  projects: [] as Project[],
  jobs: [] as Job[],
}

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [collections, setCollections] = useState(initialCollections)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | undefined>(undefined)

  const loadContent = useCallback(async () => {
    setLoading(true)
    setError(undefined)
    try {
      const [camps, events, team, partners, projects, jobs] = await Promise.all([
        fetchCamps(),
        fetchEvents(),
        fetchTeam(),
        fetchPartners(),
        fetchProjects(),
        fetchJobs(),
      ])
      setCollections({ camps, events, team, partners, projects, jobs })
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
