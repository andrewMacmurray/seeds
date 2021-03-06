import React from 'react'
import TwinSeed from './Seeds/TwinSeed.js'
import CircleSeed from './Seeds/CircleSeed.js'
import SingleSeed from './Seeds/SingleSeed.js'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { setView, playAudio } from '../redux/allActions.js'
import flashLoadingScreen from '../redux/actionSequences/flashLoadingScreen.js'

class TitleScreen extends React.Component {

  constructor () {
    super()
    this.state = { leaving: false }
  }

  startLeaveSequence = () => {
    this.setState({ leaving: true })
    setTimeout(() => this.props.setView('intro'), 4000)
  }

  goToHub = () => {
    this.setState({ leaving: true })
    this.props.flashLoadingScreen('blank', 1500)
    setTimeout(() => this.props.setView('hub'), 1000)
  }

  begin = () => {
    const { levelProgress } = this.props.level
    if (levelProgress > 1) {
      this.goToHub()
    } else {
      this.startLeaveSequence()
      this.props.playAudio()
    }
  }

  seedClasses () {
    const { leaving } = this.state
    return classNames(
      'intro-seed',
      { forwards: !leaving },
      { backwards: leaving }
    )
  }

  leavingClasses = ({ durationEntering, durationLeaving, delay }) => {
    const { leaving } = this.state
    return classNames(
      { leave: leaving },
      { [`duration-${durationLeaving}`]: leaving },
      { enter: !leaving },
      { [`duration-${durationEntering}`]: !leaving },
      { [`delay-${delay}`]: !leaving }
    )
  }

  render () {
    const seedClasses = this.seedClasses()
    const beginClasses = this.leavingClasses({ durationEntering: 2, durationLeaving: 2, delay: 3 })
    const titleClasses = this.leavingClasses({ durationEntering: 1, durationLeaving: 3, delay: 3 })
    return (
      <div className='intro'>
        <div className='seed-container'>
          <CircleSeed seedType={seedClasses + ' three'} />
          <TwinSeed seedType={seedClasses + ' two twin-light'}/>
          <TwinSeed seedType={seedClasses + ' one twin-dark'}/>
          <TwinSeed seedType={seedClasses + ' two twin-red'}/>
          <SingleSeed seedType={seedClasses + ' three'} />
          <p className={titleClasses + ' title'}>seeds</p>
          <p
            className={beginClasses + ' begin'}
            onClick={this.begin}
          >begin</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { setView, playAudio, flashLoadingScreen })(TitleScreen)
