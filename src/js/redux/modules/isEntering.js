import { createAction } from 'redux-actions'
import { falseBoard, trueBoard } from '../../model/constants.js'
import { booleanArray } from '../../model/model.js'

// action types
const SET_ENTERING = 'SET_ENTERING'
const RESET_ENTERING = 'RESET_ENTERING'

// reducer
const defaultState = trueBoard
export default (state = defaultState, action) => {
  switch (action.type) {
  case SET_ENTERING:
    return action.payload

  case RESET_ENTERING:
    return falseBoard

  default:
    return state
  }
}

// actions
export const setEntering = () => (dispatch, getState) => {
  const { board } = getState()
  dispatch({
    type: SET_ENTERING,
    payload: booleanArray(board)
  })
}

export const resetEntering = createAction(RESET_ENTERING)
