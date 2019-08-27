const reducer = (state = [], action = {}) => {
  console.log("func test", action)
  switch (action.type) {
  case 'STORE_IMAGES': {
    console.log("Test Reducer")
    return action.payload
  }
  default:
    return state
  }
}

export default reducer