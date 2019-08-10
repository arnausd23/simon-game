import { createSelector } from 'reselect'

export const reducerState = state => state.sequence

export const getSequence = createSelector(
  reducerState,
  (state) => state.sequence
)

export const getItems = createSelector(
  reducerState,
  (state) => state.items
)
