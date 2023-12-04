// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isStart: false, initialTime: 25}

  startOrPauseTime = () => {
    this.setState(prevState => ({isStart: !prevState.isStart}))
  }

  toIncrease = () => {
    const {isStart} = this.state
    if (!isStart) {
      this.setState(prevState => ({initialTime: prevState.initialTime + 1}))
    }
  }

  toDecrease = () => {
    const {isStart} = this.state
    if (!isStart) {
      this.setState(prevState => ({initialTime: prevState.initialTime - 1}))
    }
  }

  toReset = () => {
    this.setState({isStart: false, initialTime: 25})
  }

  render() {
    const {isStart, initialTime} = this.state
    const startOrPoseImg = isStart
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const startOrPoseAltText = isStart ? 'pause icon' : 'play icon'
    const runOrPauseText = isStart ? 'Running' : 'Paused'
    const startOrPauseText = isStart ? 'Pause' : 'Start'
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="bg-container2">
          <div className="bg-img-container">
            <div className="timer-container">
              <h1 className="digital-timer">25:00</h1>
              <p className="timer-status">{runOrPauseText}</p>
            </div>
          </div>
          <div className="start-restart-container1">
            <div className="start-restart-container2">
              <button
                type="button"
                className="startOrPauseButton start-container"
                onClick={this.startOrPauseTime}
              >
                <img
                  src={startOrPoseImg}
                  alt={startOrPoseAltText}
                  className="play-icon-img"
                />
                <p className="start-text">{startOrPauseText}</p>
              </button>
              <button
                type="button"
                className="startOrPauseButton start-container"
                onClick={this.toReset}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="play-icon-img"
                />
                <p className="start-text">Reset</p>
              </button>
            </div>
            <p className="set-time-limit-text">Set Timer limit</p>
            <div className="set-timer-buttons">
              <button
                type="button"
                className="plus-minus-buttons"
                onClick={this.toDecrease}
              >
                -
              </button>
              <div className="set-timer-limit-container">
                <p>{initialTime}</p>
              </div>
              <button
                type="button"
                className="plus-minus-buttons"
                onClick={this.toIncrease}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
