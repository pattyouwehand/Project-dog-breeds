const reducer = (state = [], action) => {
  switch (action.type) {
  case 'STORE_PLAYER': {
    return [...state, action.payload]
  }
  default:
    return state
  }
}

export default reducer