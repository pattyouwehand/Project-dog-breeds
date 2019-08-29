import * as request from 'superagent';

export const GET_PICTURE = 'GET_PICTURE'

export function getPicture(random){
  return {
    type: GET_PICTURE,
    payload: random
  }
}

export function getRandomPicture(){
  console.log("hello")  
  return function (dispatch){
    console.log("dispatch function")
    request('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        console.log("RESPONSE:", response)
        dispatch(getPicture(response.body))
      })
  }
}

{/* ${encodeURIComponent(random)}*/}