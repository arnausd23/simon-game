export const STORE_SEQUENCE = '[Sequence] Store Sequence'

export function StoreSequence (sequence) {
  return { type: STORE_SEQUENCE, sequence }
}

export const STORE_ITEMS = '[Sequence] Store Items'

export function StoreItems (items) {
  return { type: STORE_ITEMS, items }
}
