import {ActionTypes} from "../actionTypes/actionTypes";

import {initialState} from "../inintialState";

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.SET_ALL_REGIONS:
      return {
        ...state, regions: action.payload
      }
    case ActionTypes.SET_ALL_EXPERIENCES:
      return {
        ...state, experiences: action.payload
      }
    case ActionTypes.SET_ITEMS:
      return {
        ...state, items: action.payload
      }
    default:
       return state
  }
}