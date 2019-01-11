import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super()

        this.splitArray = this.splitArray.bind(this)

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    updateInput(value) {
        this.setState({
            userInput: value
        })
    }

    splitArray(str) {
        let strArr = str.split(',');
        let evenArr = strArr.filter((element) => element%2 === 0);
        let oddArr = strArr.filter((element) => element%2 !== 0);
        this.setState({
            evenArray: evenArr,
            oddArray: oddArr
        })
    }


    render() {
        return (
            <outline>
                
                <div className="puzzleBox evenAndOddPB">
                    <h4>Evens and Odds</h4>
                    <input className="inputLine"
                        onChange={ (e) => this.updateInput(e.target.value) }
                        value={this.state.userInput}/>
                    <button className="confirmationButton"
                        onClick={ (e) => this.splitArray(this.state.userInput) }>Split</button>
                    <span className="resultsBox">{`Evens: [${this.state.evenArray}]`}</span>
                    <span className="resultsBox">{`Odds: [${this.state.oddArray}]`}</span>
                </div>
                
            </outline>

            
        );
    }
}

export default EvenAndOdd