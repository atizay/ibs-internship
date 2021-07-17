import * as Thunks from '../thunk/thunk';
import * as Actions from './actions'

export const ActionCreators = {
  ...Thunks,
  ...Actions
}