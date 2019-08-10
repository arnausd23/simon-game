import { STORE_ITEMS, STORE_SEQUENCE } from '../actions/sequenceActions'

const initialState = {
  sequence: [],
  items: []
}

export function sequenceReducer (state = initialState, action) {
  switch (action.type) {
    case STORE_SEQUENCE:
      return {
        ...state,
        sequence: [
          ...action.sequence
        ]
      }
    case STORE_ITEMS:
      return {
        ...state,
        items: [
          ...action.items
        ]
      }
    default:
      return state
  }
}
