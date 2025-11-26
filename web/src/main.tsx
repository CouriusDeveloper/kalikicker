import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { HomePage } from './pages/HomePage'
import { TerminePage } from './pages/TerminePage'
import { TeamPage } from './pages/TeamPage'
import { KonzeptPage } from './pages/KonzeptPage'
import { CampsOverviewPage } from './pages/CampsOverviewPage'
import { CampDetailPage } from './pages/CampDetailPage'
import { PartnerPage } from './pages/PartnerPage'
import { ProjektePage } from './pages/ProjektePage'
import { AngeboteVereinePage } from './pages/AngeboteVereinePage'
import { JobsPage } from './pages/JobsPage'
import { BuchenPage } from './pages/BuchenPage'
import { GaleriePage } from './pages/GaleriePage'
import { AgbPage } from './pages/AgbPage'
import { DatenschutzPage } from './pages/DatenschutzPage'
import { ImpressumPage } from './pages/ImpressumPage'
import { NotFoundPage } from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'termine', element: <TerminePage /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'konzept', element: <KonzeptPage /> },
      { path: 'camps', element: <CampsOverviewPage /> },
      { path: 'camps/:campId', element: <CampDetailPage /> },
      { path: 'partner', element: <PartnerPage /> },
      { path: 'projekte', element: <ProjektePage /> },
      { path: 'angebote-vereine', element: <AngeboteVereinePage /> },
      { path: 'jobs', element: <JobsPage /> },
      { path: 'buchen', element: <BuchenPage /> },
      { path: 'galerie', element: <GaleriePage /> },
      { path: 'agb', element: <AgbPage /> },
      { path: 'datenschutz', element: <DatenschutzPage /> },
      { path: 'impressum', element: <ImpressumPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
