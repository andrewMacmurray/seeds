import { createSelector } from 'reselect'
import { booleanArray, transformBoard } from '../model/model.js'
import { falseBoard } from '../model/constants.js'

const _moveArray = (state) => state.moves.moveArray
const _board = (state) => state.board
const defaultState = falseBoard

const isDraggingArray = createSelector(
  [ _moveArray, _board ],
  (moveArray, board) =>
    moveArray.length > 0 ?
      booleanArray(transformBoard(moveArray, board, 0)) :
      defaultState
)

export default isDraggingArray