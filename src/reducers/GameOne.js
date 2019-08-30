import {GET_PICTURE} from '../actions/GameOne'

const initialState = {
    payload:{}
}
export default (state = initialState, action) => {
    switch(action.type){
    case GET_PICTURE:
        return {...state, payload: action.payload}
    default: return state
    }   
}