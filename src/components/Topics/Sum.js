import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNumber1(value){
        this.setState({
            number1: value
        })
    }

    updateNumber2(value){
        this.setState({
            number2: value
        })
    }

    calcSum(num1, num2){
        let sumVar = Number(num1) + Number(num2)
        this.setState({
            sum: sumVar
        })
    }

    render() {
        return (
            <outline>
                <div className="puzzleBox sumPB">
                    <h4>Sum</h4>
                    <input className="inputLine"
                        onChange={ (e) => this.updateNumber1(e.target.value)}
                        value={this.state.number1}/>
                    <input className="inputLine"
                        onChange={ (e) => this.updateNumber2(e.target.value)}
                        value={this.state.number2}/>
                    <button className="confirmationBox"
                        onClick={ () => this.calcSum(this.state.number1, this.state.number2)}>Add</button>
                    <span className="resultsBox">Sum: {this.state.sum}</span>
                </div>
            </outline>
            
        );
    }
}

export default Sum