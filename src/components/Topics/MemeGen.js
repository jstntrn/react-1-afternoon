import React, { Component } from 'react';

class MemeGen extends Component {
    constructor(){
        super()

        this.state = {
            memeArray = [
                'http://i.imgflip.com/1bij.jpg',
                'http://i.imgflip.com/26am.jpg',
                'http://i.imgflip.com/1bij.jpg',
                'http://i.imgflip.com/26am.jpg',
            ],
            imageURL = 'http://i.imgflip.com/26am.jpg'
        }
    }

    imageSel(){
        let newURL = 
        this.setState({
            imageURL: 
        })
    }

    render() {
        return (
            <outline>
    
                <div className="puzzleBox evenAndOddPB">
                    <img height="200px" src={'http://i.imgflip.com/1bij.jpg'} alt='simply'/>
                    <button className="confirmationBox"
                        onClick={ () => this.changeMeme()}></button>
                </div>
                
            </outline>
        );
    }
}

export default MemeGen