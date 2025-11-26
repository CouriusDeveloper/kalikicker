import { BookingForm } from '../components/BookingForm'

export const BuchenPage = () => (
  <div className="space-y-8">
    <header className="space-y-3">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">Buchung</p>
      <h1 className="text-4xl font-bold text-primary">Camp buchen</h1>
      <p className="text-muted text-lg">
        Wähle dein Wunschcamp und gib uns alle Infos, damit wir dein Kind optimal betreuen können.
      </p>
    </header>
    <BookingForm />
  </div>
)
