import { useResponsiveness } from '../../../../hooks/useResponsiveness'

type TableHeadProps = {
  cyclesTotal: number
}

export function TableHead({ cyclesTotal }: Readonly<TableHeadProps>) {
  const { isMobile } = useResponsiveness()

  if (isMobile) {
    return (
      <>
        <strong>Ciclos</strong>
        <strong>{cyclesTotal}</strong>
      </>
    )
  }

  return (
    <>
      <strong>Tarefa</strong>
      <strong>Duração</strong>
      <strong>Início</strong>
      <strong>Status</strong>
    </>
  )
}
