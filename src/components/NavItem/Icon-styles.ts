import styled from 'styled-components'

export const Container = styled.span`
  font-size: 1.5rem;
  line-height: 1rem;

  :focus {
    color: ${({ theme }) => theme.white};
  }
`
