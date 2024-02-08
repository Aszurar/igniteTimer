import * as NavItem from '../NavItem'
import ShootingStarSVG from '../../assets/shooting-star.svg'
import { useResponsiveness } from '../../hooks/useResponsiveness'
import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import { Container, Link } from './styles'

export function Footer() {
  const { isMobile } = useResponsiveness()

  const author = isMobile ? 'Lucas de Lima' : 'Lucas de Lima Martins de Souza'

  return (
    <Container>
      <strong>
        Desenvolvido por
        <span>{author}</span>
        <img src={ShootingStarSVG} alt="" />
      </strong>
      <nav aria-label="Redes sociais">
        <NavItem.Root asChild label="Acessar Github">
          <Link
            href="https://github.com/Aszurar/IgniteTimer"
            target="_blank"
            className={`flex items-center justify-center text-xl transition-all`}
            aria-label="Acessar Github"
            rel="noreferrer"
          >
            <NavItem.Icon
              icon={GithubLogo}
              className="text-gray-300 hover:text-white focus:text-white"
            />
          </Link>
        </NavItem.Root>

        <NavItem.Root asChild label="Acessar Linkedin">
          <Link
            href="https://www.linkedin.com/in/lucas-de-lima-azsura/"
            target="_blank"
            className={`flex items-center justify-center text-xl transition-all`}
            aria-label="Acessar Linkedin"
            rel="noreferrer"
          >
            <NavItem.Icon
              icon={LinkedinLogo}
              className="text-gray-300 hover:text-white focus:text-white"
            />
          </Link>
        </NavItem.Root>
      </nav>
    </Container>
  )
}
