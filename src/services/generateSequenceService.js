import { getItems, getSequence } from '../store/selectors/sequenceSelector'
import { store } from '../store'

export class RandomSequenceService {
  constructor () {
    this.sequence = getSequence(store.getState())
    // this.items = getItems(store.getState())
    this.items = [1,2,3,4,5,6]
  }

  generateRandomSequence () {
    console.log(this.sequence)
    const itemToAdd = this.items[Math.floor(Math.random() * this.items.length)]
    return [ ...this.sequence, itemToAdd]
  }
}
