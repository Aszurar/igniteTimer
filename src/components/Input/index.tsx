import { ComponentProps, ElementType, ReactNode } from 'react'
import { InputContainer, InputControl, InputIcon } from './styles'

type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

function Root({ children, ...rest }: RootProps) {
  return <InputContainer {...rest}>{children}</InputContainer>
}

type ControlProps = ComponentProps<'input'>

function Control(props: ControlProps) {
  return <InputControl {...props} />
}

type IconProps = ComponentProps<'span'> & {
  icon: ElementType
}

function Icon({ icon: Icon }: IconProps) {
  return (
    <InputIcon>
      <Icon />
    </InputIcon>
  )
}

export { Root, Control, Icon }
