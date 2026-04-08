// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onButtonclick = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({
      num: randomNum,
    })
  }

  render() {
    const {num} = this.state
    return (
      <div className="outer-container">
        <div className="inner-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.onButtonclick} className="button">
            Generate
          </button>
          <p>{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
