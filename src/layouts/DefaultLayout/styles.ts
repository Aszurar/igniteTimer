import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 74rem;
  /* min-height: cal(100vh - 10rem); */
  height: 100%;
  max-height: 46.25rem;

  background-color: ${({ theme }) => theme['gray-800']};
  padding: 2.5rem;

  border-radius: 8px;

  margin-bottom: 3.375rem;

  @media (max-width: 640px) {
    margin: 0;
    height: 100vh;
    width: 100%;
    padding: 2rem;
    max-height: 100vh;
  }

  @media (max-width: 1024px) {
    padding: 1.5rem;
    margin: 0 auto;
  }

  @media (max-width: 320px) and (max-height: 680px) {
    padding: 1rem;
  }

  @media (min-width: 640px) and (min-height: 720px) {
    margin: 3rem 1.5rem;
  }
`
