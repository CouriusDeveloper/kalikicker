import { LegalDocumentContent } from '../components/LegalDocument'
import { useContent } from '../context/ContentContext'

export const ImpressumPage = () => {
  const { imprint, loading } = useContent()
  return <LegalDocumentContent document={imprint} fallbackTitle="Impressum" loading={loading} />
}
