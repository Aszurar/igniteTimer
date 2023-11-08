import { Minus, Play, Plus } from 'phosphor-react'

import * as Input from '../../components/Input'

import {
  Button,
  FormContainer,
  HomeContainer,
  IconButton,
  TimerContainer,
} from './styles'
import { useState } from 'react'
export function Home() {
  const [timer, setTimer] = useState(5)

  function handleIncrement() {
    if (timer === 60) {
      return
    }

    setTimer(timer + 5)
  }
  function handleDecrement() {
    if (timer === 5) {
      return
    }

    setTimer(timer - 5)
  }

  return (
    <HomeContainer>
      <FormContainer id="timer">
        <label htmlFor="task">Vou trabalhar em</label>
        <Input.Root style={{ flex: 1 }}>
          <Input.Control
            id="task"
            placeholder="Dê um nome para o seu projeto"
          />
        </Input.Root>

        <label htmlFor="minutesAmount">durante</label>
        <Input.Root style={{ width: '5.5rem' }}>
          <IconButton type="button" onClick={handleIncrement}>
            <Input.Icon icon={Plus} />
          </IconButton>
          <Input.Control
            style={{ width: '100%' }}
            placeholder="00"
            type="number"
            value={timer}
            step={5}
            min={5}
            max={60}
          />
          <IconButton type="button" onClick={handleDecrement}>
            <Input.Icon icon={Minus} />
          </IconButton>
        </Input.Root>
        <label htmlFor="minutesAmount"> minutos.</label>
      </FormContainer>

      <TimerContainer>
        <span>0</span>
        <span>0</span>
        <strong>:</strong>
        <span>0</span>
        <span>0</span>
      </TimerContainer>

      <Button type="submit" form="timer">
        <Play size={24} />
        <span>Começar</span>
      </Button>
    </HomeContainer>
  )
}
