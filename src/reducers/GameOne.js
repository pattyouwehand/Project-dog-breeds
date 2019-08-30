import {GET_PICTURE} from '../actions/GameOne'

const initialState = {
    payload:{}
}
export default (state = initialState, action) => {
    console.log('ACTION 1:', action, action.type, GET_PICTURE)
    switch(action.type){
    case GET_PICTURE:
        console.log('ACTION 2:', action)
        return {...state, payload: action.payload}
    default: return state
    }   
}