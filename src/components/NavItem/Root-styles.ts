import * as Tooltip from '@radix-ui/react-tooltip'
import styled from 'styled-components'

export const Content = styled(Tooltip.Content)`
  padding: 0.375rem 0.75rem;
  border-radius: 6px;

  font-weight: 500;
  font-size: 0.875rem;

  color: ${({ theme }) => theme['green-300']};
  background-color: ${({ theme }) => theme['gray-900']};

  svg {
    fill: ${({ theme }) => theme['gray-900']};
  }
`
