import { LegalDocument } from '../components/LegalDocument'
import { useContent } from '../context/ContentContext'

export const DatenschutzPage = () => {
  const { privacy, loading } = useContent()
  return <LegalDocument document={privacy} fallbackTitle="Datenschutzerklärung" loading={loading} />
}
