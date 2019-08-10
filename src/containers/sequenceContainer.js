import { connect } from 'react-redux'

import { StoreItems, StoreSequence } from '../store/actions/sequenceActions'
import { SequenceComponent } from '../components/sequenceComponent'
import { RandomSequenceService } from '../services/generateSequenceService'

const mapStateToProps = () => {
  return {
    sequence: new RandomSequenceService().generateRandomSequence()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSequenceAdd: (sequence) => {
      dispatch(StoreSequence(sequence))
    },
    onItemAdd: (items) => {
      dispatch(StoreItems(items))
    }
  }
}

export const SequenceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SequenceComponent)
