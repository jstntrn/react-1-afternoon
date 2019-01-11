import React, { Component } from 'react';

/*
data being passed in:
Original: [ 
{ "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, 
{ "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, 
{ "name": "Carly Armstrong", "title": "CEO" } 
]
*/

class FilterObject extends Component {
    constructor(){
        super()
        this.filterArray = this.filterArray.bind(this)

        this.state = {
            unFilteredArray: [{"name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, 
            { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, 
            { "name": "Carly Armstrong", "title": "CEO" }],
            userInput: '',
            filteredArray: []
        }
    }

    updateInput(value) {
        this.setState({
            userInput: value
        })
    }

    filterArray(str){
        let newArr = this.state.unFilteredArray.filter(el => el[str]) //needed to put str in bracket notation in order to pass in variable
        this.setState({
            filteredArray: newArr
        })
    }

    //note: used {JSON.stringify(this.state.unFilteredArray, null, 10)} inside span to turn objects into strings that can be displayed with replacer set to null and space set to 10
    render() {
        return (
            <outline>

                <div className="puzzleBox filterObjectPB">
                    <h4>Filter Object</h4>
                    <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                    <input className="inputLine"
                        onChange={ (e) => this.updateInput(e.target.value) }
                        value={this.state.userInput}/>
                    <button className="confirmationButton"
                        onClick={ (e) => this.filterArray(this.state.userInput) }>Filter</button>
                    <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
                </div>

            </outline>
        );
    }
}

export default FilterObject