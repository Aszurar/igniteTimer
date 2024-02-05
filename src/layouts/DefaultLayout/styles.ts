import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    padding: 5rem 1.5rem;
  }
`

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 74rem;
  height: 100%;
  max-height: 46.25rem;

  background-color: ${({ theme }) => theme['gray-800']};
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  border-radius: 8px;

  @media (max-width: 640px) {
    margin: 0;
    height: 100vh;
    width: 100%;
    padding: 2rem;
    max-height: 100vh;
  }

  @media (max-width: 1024px) {
    padding: 1rem;
    margin: 0 auto;
  }

  @media (max-width: 320px) and (max-height: 680px) {
    padding: 1rem;
  }
`
