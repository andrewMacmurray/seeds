/// level
import * as board from './modules/level/board.js'
import * as moves from './modules/level/moves.js'
import * as setDrag from './modules/level/setDrag.js'
import * as fallingMagnitude from './modules/level/fallingMagnitude.js'
import * as growingMoves from './modules/level/growingMoves.js'
import * as isEntering from './modules/level/isEntering.js'
import * as isLeaving from './modules/level/isLeaving.js'
import * as score from './modules/level/score.js'
import * as levelProgress from './modules/level/levelProgress.js'
import * as weather from './modules/level/weather.js'

import * as intro from './modules/intro.js'
import * as audio from './modules/audio.js'
import * as isUpdating from './modules/isUpdating.js'
import * as backdrop from './modules/backdrop.js'
import * as view from './modules/view.js'
import * as loading from './modules/loadingScreen.js'

module.exports = {
  ...board,
  ...moves,
  ...setDrag,
  ...fallingMagnitude,
  ...growingMoves,
  ...isEntering,
  ...isLeaving,
  ...score,
  ...levelProgress,
  ...weather,
  ...intro,
  ...audio,
  ...isUpdating,
  ...backdrop,
  ...view,
  ...loading
}