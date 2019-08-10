import React from 'react'

export const SequenceComponent = ({ sequence, onSequenceAdd }) => {
  return (
    <div onClick={() => onSequenceAdd(sequence)}>a</div>
  )
}
