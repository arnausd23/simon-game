import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { SequenceContainer } from './containers/sequenceContainer'
import { store } from './store'

render(
  <Provider store={store}>
    <SequenceContainer />
    <div>Sequence memory game</div>
  </Provider>,
  document.getElementById('root')
)
