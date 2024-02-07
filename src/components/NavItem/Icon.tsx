import { ComponentProps, ElementType } from 'react'
import { Container } from './Icon-styles'

type IconProps = ComponentProps<'span'> & {
  icon: ElementType
}

export function Icon({ icon: Icon, ...rest }: IconProps) {
  return (
    <Container {...rest}>
      <Icon />
    </Container>
  )
}
