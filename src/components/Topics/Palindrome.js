import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    updateInput(value){
        this.setState({
            userInput: value
        })
    }

    updatePalindrome(str){
        console.log(str);
        

        let strArr = str.split('')
        console.log(strArr);
        
        let revArr = []
        for(let i=strArr.length-1; i>=0; i--){
            revArr.push(strArr[i])
        }
        let revStr = revArr.join('')
        console.log(revStr);
        
        if(str === revStr){
            this.setState({
                palindrome: 'true'
            })
        } else {
            this.setState({
                palindrome: 'false'
            })
        }
        
        
    }

    render() {
        return (
            <outline>
                <div className="puzzleBox palindromePB">
                    <h4>Palindrome</h4>
                    <input className="inputLine" 
                        onChange={ (e) => this.updateInput(e.target.value)}
                        value={this.state.userInput}/>
                    <button className="confirmationButton"
                        onClick={ () => this.updatePalindrome(this.state.userInput)}>Check</button>
                    <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
                </div>
            </outline>
            
        );
    }
}

export default Palindrome