import React from 'react'
import TwinSeed from './Seeds/TwinSeed.js'
import CircleSeed from './Seeds/CircleSeed.js'
import SingleSeed from './Seeds/SingleSeed.js'

import { connect } from 'react-redux'
import { setView } from '../actions/actionCreators.js'

class TitleScreen extends React.Component {
  loadView (view) {
    this.props.setView('loading')
    setTimeout(() => this.props.setView(view), 3000)
  }

  render () {
    return (
      <div className='intro'>
        <div className='seed-container'>
          <CircleSeed seedType='three intro-seed' />
          <TwinSeed seedType='two twin-dark intro-seed'/>
          <TwinSeed seedType='one twin-light intro-seed'/>
          <TwinSeed seedType='two twin-red intro-seed'/>
          <SingleSeed seedType='three intro-seed' />
          <p className='title'>seed</p>
          <p className='begin' onClick={() => this.loadView('board')}>begin</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ view: state.view })

export default connect(mapStateToProps, { setView })(TitleScreen)
