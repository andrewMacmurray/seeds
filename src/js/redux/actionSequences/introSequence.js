import Promise from 'bluebird'
import * as _ from '../allActions.js'
import { makeLazyDispatcher } from '../_thunkHelpers.js'

export default () => (dispatch) => {
  const _dispatch = makeLazyDispatcher(dispatch)

  return Promise
    .resolve()
    .then(_dispatch(_.resetIntroText))
    .delay(10)
    .then(_dispatch(_.setVisibleSeeds, [ 0, 0, 1, 0, 0 ]))
    .delay(1500)
    .then(_dispatch(_.setVisibleIntroText, [ 1, 0, 0 ])) // our world is dying
    .delay(2000)
    .then(_dispatch(_.setVisibleIntroText, [ 0, 0, 0 ]))
    .delay(1000)
    .then(_dispatch(_.setVisibleIntroText, [ 0, 1, 0 ])) // we must gather many seeds
    .delay(1500)
    .then(_dispatch(_.setVisibleSeeds, [ 1, 1, 1, 1, 1 ]))
    .delay(1000)
    .then(_dispatch(_.setVisibleIntroText, [ 0, 0, 0 ]))
    .delay(1000)
    .then(_dispatch(_.setVisibleIntroText, [ 0, 0, 1 ])) // so a new one can be reborn
    .delay(1500)
    .then(_dispatch(_.setVisibleSeeds, [ 1, 0, 0, 0, 0 ]))
    .delay(1500)
    .then(_dispatch(_.setVisibleIntroText, [ 0, 0, 0 ]))
    .delay(1500)
    .then(_dispatch(_.setVisibleSeeds, [ 0, 0, 0, 0, 0 ]))
    .delay(800)
    .then(_dispatch(_.resetIntroText))
    .then(_dispatch(_.showLoadingScreen))
    .delay(1600)
    .then(_dispatch(_.setView, 'hub'))
    .delay(1400)
    .then(_dispatch(_.hideLoadingScreen))
}
