import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 640px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
  }
`

export const IconButton = styled(NavLink)`
  cursor: pointer;

  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 3px solid transparent;
  border-radius: 3px;

  color: ${({ theme }) => theme['gray-100']};

  transition: all 0.4s;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme['green-500']};
  }

  &.active {
    color: ${({ theme }) => theme['green-500']};
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 3.5rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`
