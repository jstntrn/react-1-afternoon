import React, { Component } from 'react'

class FilterString extends Component {
    constructor(){
        super()

        this.filterString = this.filterString.bind(this)

        this.state = {
            unFilteredArray: ['one', 'two', 'three', 'one', 'two', 'three', 'one', 'two', 'three', 'one', 'two', 'three'],
            userInput: '',
            filteredArray: [],
        }
    }

    updateInput(value) {
        this.setState({
            userInput: value
        })
    }

    filterString(str) {
        let newArr = this.state.unFilteredArray.filter(element => element === str)
        this.setState({
            filteredArray: newArr
        })
    }

    render() {
        return (
            <outline>
                <div className="puzzleBox filterStringPB">
                    <h4>Filter String</h4>
                    <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                    <input className="inputLine" 
                        onChange={ (e) => this.updateInput(e.target.value) }
                        value={this.state.userInput}/>
                    <button className="confirmationButton"
                        onClick={ () => this.filterString(this.state.userInput)}>Filter</button>
                    <span className="resultsBox filterStringRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
                </div>
            </outline>
        );
    }
}

export default FilterString