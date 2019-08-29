import {GET_PICTURE, getPicture} from '../actions/GameOne'

export default (state = {}, action) => {
    console.log('ACTION:', action, action.type, GET_PICTURE)
    switch(action.type){
    case GET_PICTURE:
        console.log('ACTION:', action)
        return {...state, payload: action.payload}
    default: return state
    }   
}