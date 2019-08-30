const reducer = (state = [], action) => {
<<<<<<< HEAD
  // console.log("func test", action)
  switch (action.type) {
  case 'STORE_GAME_IMAGES': {
    // console.log("Test Reducer")
=======
  
  switch (action.type) {
  case 'STORE_GAME_IMAGES': {
>>>>>>> master
    return action.payload
  }
  default:
    return state
  }
}

export default reducer