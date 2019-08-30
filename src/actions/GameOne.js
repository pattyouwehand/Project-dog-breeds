import * as request from 'superagent';

export const GET_PICTURE = 'GET_PICTURE'

export function getPicture(random){
  return {
    type: GET_PICTURE,
    payload: random
  }
}

export const SET_BREEDS = 'SET_BREEDS'
console.log(SET_BREEDS)

export function setBreeds(breeds) {
  return {
    type: SET_BREEDS,
    payload: breeds
  }
} 

function shuffle(array) {
  return array.sort(()=> {
    return 0.5 -(Math.random()*3)
  })
}

export function getRandomPicture(){
  return function (dispatch){
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        //dispatch(setBreeds(breeds))
  
        const shuffled = shuffle(breeds)
        const answers = shuffled.slice(0, 3)
        const correct = answers[0]
        const shuffledAnswers = shuffle(answers)
        const component = encodeURIComponent(correct)
        const url = `https://dog.ceo/api/breed/${component}/images/random`
  
        request(url)
          .then(response => {
            console.log('RESPONSE:', response)
            const image = response.body.message
            dispatch(getPicture({
              image,
              answers: shuffledAnswers,
              correct
            }))
          })
          .catch(console.error)
      })
  }
}
