import React, { Component } from 'react';
import './App.css';
import * as Api from './Api' 

class App extends Component {

    // Declares initial states
    state = {
        result: false,
        errorMessage: null,
        resultMessage: null
    }

    // Checks if the value entered is a palindrome
    checkPalindrome = () => {
        //Gets the value entered
        const input = this.input.value;

        // Checks if it has received some typed value, then returns error message
        if(input.length === 0)
            return this.setState({ resultMessage: null, errorMessage: 'Inform a word or phrase!' });
        
        // Make a call in the API to check if the value entered is a palindrome
        Api
            .checkPalindrome({ input })
            .then( response => {
                // Clears the error message, and assigns the value to the result variable 
                this.setState({ errorMessage: null, result: response });

                // Check if it is a palindrome and assign the message the result variable
                if(response)
                    return this.setState({ resultMessage: 'IS A PALINDROME' })
                
                // Assign the message the result variable
                return this.setState({ resultMessage: 'IS NOT A PALINDROME' });
            })
    }

    // Renders JSX and transforms into HTML to be displayed
    render() {
        return (
            <div className="container">
                <div className="form-palindrome">
                    <h2 className="form-palindrome-heading">Palindrome</h2>
                    <label>Checks whether a word or phrase is a palindrome</label>
                    <input type="text" className="form-control" placeholder="Enter a word or phrase" ref={(v) => this.input = v} />
                    { this.state.errorMessage && (
                        <p className="error-message">
                            { this.state.errorMessage }
                        </p>
                    )}
                    { this.state.resultMessage && (
                        <p className={this.state.result ? 'alert alert-success' : 'alert alert-danger' }>
                            { this.state.resultMessage }
                        </p>
                    )}
                    <button type="button" className="btn btn-lg btn-primary btn-block" onClick={this.checkPalindrome}>
                        Check
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
