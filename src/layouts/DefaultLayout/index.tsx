import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Container, LayoutContainer } from './styles'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <Container>
      <LayoutContainer>
        <Header />
        <Outlet />
        <Footer />
      </LayoutContainer>
    </Container>
  )
}
