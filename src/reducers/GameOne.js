import {ADD_PICTURE} from '../actions/GameOne'

export default (state = [], action = {}) => {
    switch(action.type){
    case ADD_PICTURE:
        return [...state, action.payload]
    default: return state
    }   
}