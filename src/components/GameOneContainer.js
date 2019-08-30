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
  {
    if(!this.props.random) return "Loading.."
    return (
        <GameOneList random={this.props.random} reloadPage={this.props.getRandomPicture}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    random: state.GameOne.payload
  }
}

const mapDispatchToProps = { getRandomPicture }

export default connect(mapStateToProps, mapDispatchToProps)(GameOneContainer)