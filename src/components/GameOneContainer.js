import React from 'react'
import GameOneList from './GameOneList'
import {getRandomPicture} from '../actions/GameOne'
import { connect } from 'react-redux';


class GameOneContainer extends React.Component {
  state = {}

  componentDidMount(){
    this.props.getRandomPicture()
  }

  render()
  {console.log("THIS PROPS RANDOM:", this.props.random)
    if(!this.props.random) return "Loading.."
    return (
        <GameOneList random={this.props.random}/>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state:", state)
  return {
    random: state.GameOne.payload
  }
}

const mapDispatchToProps = { getRandomPicture }

export default connect(mapStateToProps, mapDispatchToProps)(GameOneContainer)