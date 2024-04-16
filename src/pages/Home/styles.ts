import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 60.1875rem;
  height: max-content;
  margin: 0 auto;
  padding: 3.125rem 2rem;

  display: flex;
  gap: 3.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: auto;

  @media (max-width: 640px) {
    padding: 2rem 0;
    height: 100%;
    justify-content: start;
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
