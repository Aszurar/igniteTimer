import { CyclesState } from '../../reducer/cycles/reducer'
import { CYCLES_COLLECTION } from '../storageConfig'

export function createCycles(cyclesState: CyclesState) {
    const cyclesStateFormatted = JSON.stringify(cyclesState)

    localStorage.setItem(CYCLES_COLLECTION, cyclesStateFormatted)
}
