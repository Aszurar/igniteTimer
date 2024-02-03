import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import { CycleProps } from '../../dto/cycle'
import {
  addNewCycle,
  interruptCurrentCycleAction,
  markCurrentCyclesAsFinishedAction,
} from '../../reducer/cycles/actions'
import { cyclesReducer } from '../../reducer/cycles/reducer'
import { createCycles } from '../../storage/cycles/create'
import { listCycles } from '../../storage/cycles/list'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextProps {
  cycles: CycleProps[]
  activeCycle: CycleProps | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  handleStopCountDown: () => void
}

interface CyclesProviderProps {
  children: React.ReactNode
}

const CyclesContext = createContext({} as CyclesContextProps)

function CyclesProvider({ children }: Readonly<CyclesProviderProps>) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const response = listCycles()

      if (response) {
        return response
      }

      return initialState
    },
  )
  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.createdAt))
    }

    return 0
  })

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCyclesAsFinishedAction())
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: CycleProps = {
      id: crypto.randomUUID(),
      task: data.task,
      minutesAmount: data.minutesAmount,
      createdAt: new Date(),
    }

    dispatch(addNewCycle(newCycle))
    setAmountSecondsPassed(0)
  }

  function handleStopCountDown() {
    dispatch(interruptCurrentCycleAction())
  }

  useEffect(() => {
    createCycles(cyclesState)
  }, [cyclesState])

  const contextValue = useMemo(
    () => ({
      cycles,
      activeCycle,
      activeCycleId,
      amountSecondsPassed,
      markCurrentCycleAsFinished,
      setSecondsPassed,
      createNewCycle,
      handleStopCountDown,
    }),
    [cycles, activeCycle, activeCycleId, amountSecondsPassed],
  )

  return (
    <CyclesContext.Provider value={contextValue}>
      {children}
    </CyclesContext.Provider>
  )
}

function useCycles() {
  const context = useContext(CyclesContext)

  if (!context) {
    throw new Error('useCycles must be used within a LanguageProvider')
  }
  return context
}

export { CyclesProvider, useCycles }
