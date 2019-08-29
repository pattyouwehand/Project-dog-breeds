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
      <div>
        <GameOneList random={this.props.random} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    random: state.random
  }
}

const mapDispatchToProps = { getRandomPicture }

export default connect(mapStateToProps, mapDispatchToProps)(GameOneContainer)