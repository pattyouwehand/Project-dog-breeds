import { combineReducers } from 'redux'
import GameOne from './GameOne'
import dogimages from './dogimages'
import playersname from './playersname'
import gametwoimg from './gametwoimg'
import breedgametwo from './breedgametwo'

export default combineReducers({
  dogimages,
  playersname,
  gametwoimg,
  breedgametwo,
  GameOne
})