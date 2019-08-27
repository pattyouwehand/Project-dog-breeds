const reducer = (state = [], action = {}) => {
  switch (action.type) {
  case 'STORE_IMAGES':
    return action.payload
  default:
    return state
  }
}

export default reducer