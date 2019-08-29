import * as request from 'superagent';

export const GET_PICTURE = 'GET_PICTURE'

export function getPicture(random){
  return {
    type: GET_PICTURE,
    payload: random
  }
}

export function getRandomPicture(){
  return function (dispatch){
    request('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        dispatch(getPicture(response.body))
      })
  }
}