import React from 'react'
import * as request from 'superagent';
import GameOneList from './GameOneList'
import {getRandomPicture} from '../actions/GameOne'
import { connect } from 'react-redux';


class GameOneContainer extends React.Component {
  state = {}

  componentDidMount(){
    request('https://dog.ceo/api/breeds/image/random')
    .then(res => this.props.getRandomPicture())
  }

  render(){
    if(!this.props.random) return "Loading.."
    return <GameOneList random={this.props.random} />
  }
}

const mapStateToProps = (state) => {
  return {
    random: state.random
  }
}

export default connect(mapStateToProps)(GameOneContainer)