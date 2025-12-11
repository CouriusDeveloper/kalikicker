import { LegalDocumentContent } from '../components/LegalDocument'
import { useContent } from '../context/ContentContext'

export const DatenschutzPage = () => {
  const { privacy, loading } = useContent()
  return <LegalDocumentContent document={privacy} fallbackTitle="Datenschutzerklärung" loading={loading} />
}
