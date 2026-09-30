import { Container } from '@mui/material'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="lg" sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </>
  )
}
