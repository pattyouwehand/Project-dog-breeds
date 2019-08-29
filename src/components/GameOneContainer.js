import React from 'react'
import GameOneList from './GameOneList'
import {getRandomPicture} from '../actions/GameOne'
import { connect } from 'react-redux';


class GameOneContainer extends React.Component {
  state = {}

  componentDidMount(){
    this.props.getRandomPicture()
  }

  render(){
    if(!this.props.random) return "Loading.."
    return (
        <GameOneList random={this.props.random}/>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state:", state)
  return {
    random: state.GameOne.payload.message
  }
}

const mapDispatchToProps = { getRandomPicture }

export default connect(mapStateToProps, mapDispatchToProps)(GameOneContainer)