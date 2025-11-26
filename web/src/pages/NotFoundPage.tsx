import { Link } from 'react-router-dom'

export const NotFoundPage = () => (
  <div className="space-y-4 text-center">
    <h1 className="text-4xl font-bold text-primary">Oops!</h1>
    <p>Diese Seite konnten wir nicht finden.</p>
    <Link to="/" className="inline-flex rounded-full bg-primary text-white px-5 py-2 font-semibold">
      Zurück zur Startseite
    </Link>
  </div>
)
