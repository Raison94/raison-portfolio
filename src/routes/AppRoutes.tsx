import { Route, Routes } from 'react-router'
import MainLayout from '../layout/MainLayout'
import ProjectsPage from '../pages/ProjectsPage'
import AboutPage from '../pages/AboutPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  )
}
