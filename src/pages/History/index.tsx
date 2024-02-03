import ptBR from 'date-fns/locale/pt-BR'
import { HistoryCard, StatusProps } from '../../components/HistoryCard'
import { useCycles } from '../../context/cycles'
import { HistoryContainer, TableContainer } from './styled'
import { formatDistanceToNow } from 'date-fns'
import { TableHead } from './components/TableHead'

export function History() {
  const { cycles } = useCycles()
  const cyclesTotal = cycles.length

  const HistoryCardList = cycles.map((cycle) => {
    const dateRelativeToNow = formatDistanceToNow(new Date(cycle.createdAt), {
      addSuffix: true,
      locale: ptBR,
    })

    let status = 'complete' as StatusProps

    if (cycle.interruptedDate) {
      status = 'interrupted'
    }

    if (cycle.finishedDate) {
      status = 'complete'
    }

    if (!cycle.finishedDate && !cycle.interruptedDate) {
      status = 'ongoing'
    }

    return (
      <HistoryCard
        key={cycle.id}
        title={cycle.task}
        time={`${cycle.minutesAmount} minutos`}
        date={dateRelativeToNow}
        status={status}
      />
    )
  })

  return (
    <HistoryContainer>
      <header>
        <h1>Meu Histórico</h1>
      </header>

      <TableContainer>
        <table>
          <thead>
            <tr className="head">
              <TableHead cyclesTotal={cyclesTotal} />
            </tr>
          </thead>

          <tbody>{HistoryCardList}</tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  )
}
