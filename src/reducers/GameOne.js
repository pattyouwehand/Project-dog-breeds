import {GET_PICTURE} from '../actions/GameOne'

const initialState = {
    payload:{}
}
export default (state = initialState, action) => {
    console.log('ACTION:', action, action.type, GET_PICTURE)
    switch(action.type){
    case GET_PICTURE:
        console.log('ACTION:', action)
        return {...state, payload: action.payload}
    default: return state
    }   
}