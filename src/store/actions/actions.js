import {ActionTypes} from "../actionTypes/actionTypes";

export const setAllRegions = (regions) => dispatch => {
  dispatch({type: ActionTypes.SET_ALL_REGIONS, payload: regions})
}

export const setAllExperiences = (experiences) => dispatch => {
  dispatch({type:  ActionTypes.SET_ALL_EXPERIENCES, payload: experiences})
}

export const setItemsRequest = (items) => dispatch => {
  dispatch({type: ActionTypes.SET_ITEMS, payload: items})
}