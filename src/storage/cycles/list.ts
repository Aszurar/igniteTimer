import { CYCLES_COLLECTION } from '../storageConfig'

export function listCycles() {
    const storage = localStorage.getItem(CYCLES_COLLECTION)

    if (!storage) {
        return null
    }

    return JSON.parse(storage)
}
