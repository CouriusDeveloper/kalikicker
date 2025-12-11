import { LegalDocument } from '../components/LegalDocument'
import { useContent } from '../context/ContentContext'

export const AgbPage = () => {
  const { agb, loading } = useContent()
  return <LegalDocument document={agb} fallbackTitle="Allgemeine Geschäftsbedingungen" loading={loading} />
}
