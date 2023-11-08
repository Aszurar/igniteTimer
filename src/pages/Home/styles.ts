import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 100%;
  max-width: 40.9375rem;
  margin: 0 auto;

  display: flex;
  flex: 1;
  gap: 3.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  flex-wrap: wrap;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: 700;
`

export const IconButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;

  background-color: transparent;
  transition: all 0.4s;

  &:hover {
    filter: brightness(0.7);
  }
`

export const TimerContainer = styled.section`
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
`

type ButtonProps = {
    isStop?: boolean
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4rem;
  gap: 0.5rem;

  color: ${({ theme }) => theme['gray-100']};
  background-color: ${({ theme, isStop = false }) =>
        isStop ? theme['red-500'] : theme['green-500']};

  border-radius: 8px;

  span {
    font-weight: 700;
  }

  transition: all 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme, isStop = false }) =>
        isStop ? theme['red-700'] : theme['green-700']};
  }
`
