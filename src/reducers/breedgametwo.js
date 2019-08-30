const reducer = (state = [], action) => {
<<<<<<< HEAD
  // console.log("REDUCER ACTION STORE_PLAYER", action)
  switch (action.type) {
  case 'STORE_BREED': {
    // console.log("Test Reducer Store Player")
=======
  switch (action.type) {
  case 'STORE_BREED': {
>>>>>>> master
    return [...state, action.payload]
  }
  default:
    return state
  }
}

export default reducer