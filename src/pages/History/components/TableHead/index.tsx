import { useResponsiveness } from '../../../../hooks/useResponsiveness'

type TableHeadProps = {
  cyclesTotal: number
}

export function TableHead({ cyclesTotal }: Readonly<TableHeadProps>) {
  const { isMobile } = useResponsiveness()

  if (isMobile) {
    return (
      <>
        <th>Ciclos</th>
        <th>{cyclesTotal}</th>
      </>
    )
  }

  return (
    <>
      <th>Tarefa</th>
      <th>Duração</th>
      <th>Início</th>
      <th>Status</th>
    </>
  )
}
