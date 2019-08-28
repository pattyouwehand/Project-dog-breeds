const reducer = (state = [], action) => {
  console.log("REDUCER ACTION STORE_PLAYER", action)
  switch (action.type) {
  case 'STORE_PLAYER': {
    console.log("Test Reducer Store Player")
    return [...state, action.payload]
  }
  default:
    return state
  }
}

export default reducer