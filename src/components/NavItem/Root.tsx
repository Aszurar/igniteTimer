import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { Content } from './Root-styles'

type LinkButtonProps = {
  children: ReactNode
  label: string
  asChild?: boolean
}

export function Root({ label, children, asChild = false }: LinkButtonProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild={asChild}>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Content sideOffset={5} aria-label=".">
            {label}
            <Tooltip.Arrow />
          </Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
