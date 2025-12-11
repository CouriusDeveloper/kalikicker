import { LegalDocument } from '../components/LegalDocument'
import { useContent } from '../context/ContentContext'

export const ImpressumPage = () => {
  const { imprint, loading } = useContent()
  return <LegalDocument document={imprint} fallbackTitle="Impressum" loading={loading} />
}
