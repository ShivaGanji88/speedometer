// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <div className="two-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image-setting"
          />
          <h1 className="speed0">Speed is {speed}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              type="button"
              className="button-color button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="break-color button"
              onClick={this.onDecrement}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
