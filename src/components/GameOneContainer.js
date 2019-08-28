import React from 'react'
import * as request from 'superagent'
import GameOneList from './GameOneList'


export default class GameOneContainer extends React.Component {
  state = {}

  componentDidMount(){
    request('https://dog.ceo/api/breeds/image/random')
    .then(response => this.setState({dog: response.body}))
  }


}

