import { useResponsiveness } from '../../hooks/useResponsiveness'
import {
  HistoryCardContainer,
  HistoryCardInfo,
  HistoryCardInfoMobileFooter,
  StatusInfo,
} from './styles'

export type StatusProps = 'ongoing' | 'complete' | 'interrupted'

type HistoryCardProps = {
  title: string
  time: string
  date: string
  status: StatusProps
}

const STATUS = {
  ongoing: 'Em andamento',
  complete: 'Completo',
  interrupted: 'Interrompido',
}

export function HistoryCard({
  time,
  date,
  title,
  status,
}: Readonly<HistoryCardProps>) {
  const statusText = STATUS[status]

  const { isMobile } = useResponsiveness()

  return (
    <HistoryCardContainer>
      {isMobile ? (
        <>
          <HistoryCardInfo className="title">{title}</HistoryCardInfo>

          <HistoryCardInfo className="time">{time}</HistoryCardInfo>

          <HistoryCardInfoMobileFooter>
            <HistoryCardInfo>
              <StatusInfo status={status}>{statusText}</StatusInfo>
            </HistoryCardInfo>
            <HistoryCardInfo>{date}</HistoryCardInfo>
          </HistoryCardInfoMobileFooter>
        </>
      ) : (
        <>
          <HistoryCardInfo>{title}</HistoryCardInfo>
          <HistoryCardInfo>{time}</HistoryCardInfo>
          <HistoryCardInfo>{date}</HistoryCardInfo>
          <HistoryCardInfo>
            <StatusInfo status={status}>{statusText}</StatusInfo>
          </HistoryCardInfo>
        </>
      )}
    </HistoryCardContainer>
  )
}
