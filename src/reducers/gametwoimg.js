const reducer = (state = [], action) => {
  
  switch (action.type) {
  case 'STORE_GAME_IMAGES': {
    return action.payload
  }
  default:
    return state
  }
}

export default reducer