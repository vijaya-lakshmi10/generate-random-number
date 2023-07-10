// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component{
    state={randomNumber:0}
    getRandomNumber=()=>Math.ceil(Math.random()*100)
    generateRandomNumber=()=>{
        this.setState({randomNumber:this.getRandomNumber()})
    }
    render(){
        const {randomNumber}=this.state
        return(
            <div className="bg-container">
            <div className="random-number-container">
            <h1 className="heading">Random Number</h1>
            <p className="desc">Generate a random number in the range of 0 to 100</p>
            <button className="generate-btn" type="button" onClick={this.generateRandomNumber}>Generate</button>
            <p className="random-number">{randomNumber}</p>
            </div>
            </div>
        )
    }
}
export default RandomNumberGenerator
