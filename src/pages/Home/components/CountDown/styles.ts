import styled from 'styled-components'

export const CountDownContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  font-weight: 700;

  span {
    padding: 2rem 1rem;

    border-radius: 8px;
    background-color: ${({ theme }) => theme['gray-700']};
  }

  strong {
    padding: 2rem 0;
    width: 4rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme['green-500']};
  }

  @media (max-width: 640px) {
    font-size: 5rem;
    line-height: 4rem;

    margin-top: 4rem;

    span {
      padding: 1rem 0.5rem;
    }

    strong {
      padding: 1rem 0;
      width: 2rem;
    }
  }
  @media (max-width: 300px) {
    font-size: 3rem;
    line-height: 2rem;

    /* span {
      padding: 1rem 0.5rem;
    } */

    strong {
      padding: 1rem 0;
      width: 1rem;
    }
  }
`
