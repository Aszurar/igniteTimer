import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  padding: 0.5rem 2rem;

  width: 100%;

  @media (min-width: 640px) {
    gap: 1rem;
  }

  strong {
    display: inline-block;
    color: ${({ theme }) => theme['gray-100']};

    span {
      color: ${({ theme }) => theme.white};
      margin: 0 0.5rem;

      font-weight: 400;
    }

    img {
      display: inline-block;
      height: 1.25rem;
      width: 1.25rem;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  @media (max-width: 640px) {
    position: absolute;
    top: 0;
    align-self: center;
    bottom: auto;
    background-color: ${({ theme }) => theme['green-300']};
  }
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem;
  border-radius: 4px;

  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme.white};
  }
`
