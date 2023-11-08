import styled from 'styled-components'

// flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3.5 py-2.5 text-zinc-500
export const InputContainer = styled.div`
  display: flex;
  width: 272px;
  align-items: center;
  padding: 0.5rem;

  gap: 0.25rem;

  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};

  transition: all 0.4s;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme['green-500']};
  }
`

export const InputControl = styled.input`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  color: ${({ theme }) => theme['gray-100']};
  font-weight: 700;
  font-size: 1.125rem;

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
    font-weight: 700;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;

    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
`

export const InputIcon = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme['gray-500']};
`
