import React from 'react'
import { connect } from 'react-redux'
import Step1 from './Step1.js'
import Step2 from './Step2.js'
import Step3 from './Step3.js'
import Step4 from './Step4.js'
import Step5 from './Step5.js'
import stepForward from '../../redux/actionSequences/tutorial/stepForward.js'
import initTutorial from '../../redux/actionSequences/tutorial/initTutorial.js'
import tutorialData from './tutorialData.js'

class Tutorial extends React.PureComponent {

  componentDidMount () {
    this.props.initTutorial(tutorialData)
    setTimeout(this.props.stepForward, 500)
  }

  checkBoardComplete = ({ boardType, renderStep, completeStep }) => {
    const { substep, step } = this.props
    const boardComplete = this.props[boardType]
    const handleNext =
         boardComplete
      && step === renderStep
      && substep === completeStep

    setTimeout(() =>
      handleNext
        ? this.props.stepForward()
        : this.checkBoardComplete({ boardType, renderStep, completeStep })
    , 300)
  }

  render () {
    const { checkBoardComplete } = this
    return (
      <div>
        <div className='tutorial-container'>
          <Step1 {...this.props} renderStep={1} />
          <Step2 {...this.props} renderStep={2} />
          <Step3 {...this.props} renderStep={3} checkBoardComplete={checkBoardComplete} />
          <Step4 {...this.props} renderStep={4} checkBoardComplete={checkBoardComplete} />
          <Step5 {...this.props} renderStep={5} checkBoardComplete={checkBoardComplete} />
        </div>
      </div>
    )
  }
}

import {
  seedBoardComplete,
  seedPodBoardComplete
} from '../../redux/selectors/tutorial/selector_tutorialBoardComplete.js'

const mapStateToProps = (state) => ({
  ...state.tutorial,
  seedPodBoardComplete: seedPodBoardComplete(state),
  seedBoardComplete: seedBoardComplete(state)
})

export default connect(mapStateToProps, { stepForward, initTutorial })(Tutorial)
