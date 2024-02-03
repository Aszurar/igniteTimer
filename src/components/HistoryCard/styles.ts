import styled from 'styled-components'
import { StatusProps } from '.'

export const HistoryCardContainer = styled.tr`
  outline: none;
  border: none;
  color: ${({ theme }) => theme['gray-100']};

  display: grid;
  grid-template-columns: 4fr 1fr 2fr 2fr;
  gap: 1rem;
  background-color: ${({ theme }) => theme['gray-700']};
  align-items: start;

  width: 100%;
  padding: 1rem 1.5rem;

  border: solid 2px transparent;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-collapse: collapse;
    overflow: hidden;
  }
`
export const HistoryCardInfoMobileFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  margin-top: 0.75rem;
`

export const HistoryCardInfo = styled.td`
  display: flex;
  align-items: start;
  color: ${({ theme }) => theme['gray-300']};

  font-size: 0.875rem;

  @media (max-width: 640px) {
    &.title {
      font-size: 1rem;
    }
    &.time {
      margin-top: 0.25rem;
      font-size: 1.5rem;
    }
  }
`

type StatusInfoProps = {
  status: StatusProps
}

const STATUS_COLOR = {
  complete: 'green-300',
  interrupted: 'red-500',
  ongoing: 'yellow-500',
}

export const StatusInfo = styled.div<StatusInfoProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: flex;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${({ status, theme }) => theme[STATUS_COLOR[status]]};
  }
`
