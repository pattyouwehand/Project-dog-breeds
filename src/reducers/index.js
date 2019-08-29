import { combineReducers } from 'redux'
import dogimages from './dogimages'
import playersname from './playersname'
import gametwoimg from './gametwoimg'
import breedgametwo from './breedgametwo'

export default combineReducers({
  dogimages,
  playersname,
  gametwoimg,
  breedgametwo
})