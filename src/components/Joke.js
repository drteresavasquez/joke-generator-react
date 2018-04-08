import React, { Component } from 'react';
import { Button } from 'reactstrap';
import loading from './../images/loading.gif';

class Joke extends Component{
    state = {
        jokeLoaded: false,
        objResult: {},
        showResult: false,
        error:null
    }
    
    componentDidMount(){
        this.getJoke()
    }

    getJoke(){
        console.log("Get Joke()")
        fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke')
        .then(result => result.json())
        .then(
            (result) => {
                console.log("RESULT", result);
                this.setState({
                    jokeLoaded: true,
                    objResult: result,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error,
                })
            }
        )
    }
    
    showClicked = () => {
        if(!this.state.showResult){
            this.setState({
                showResult: true,
            })
        }else{
            this.setState({
                jokeLoaded: false,
                objResult: {},
                showResult: false,
                error: null
            }, this.getJoke());
        }
    }

    render(){
        const {error, jokeLoaded, objResult, showResult} = this.state;
        return (
                error ? <div className="Joke-Container">Error: {error.message}</div> : 
                !jokeLoaded ? <div className="Joke-Container"><img className="Loading-img" src={loading} alt="loading..."/></div> : 
                <div>
                    <div className="Joke-Container">
                        <JokeSetup 
                            jokeLoaded={jokeLoaded} 
                            jokeSetup={objResult.setup}
                            jokeType={objResult.type}
                            showResult={showResult}
                            showClicked={this.showClicked}
                        />
                        <Punchline 
                            showResult={showResult}
                            punch={objResult.punchline}
                            getAnotherClicked={this.getAnotherClicked}
                        />
                    </div>
                    <div className="App-button">
                        <ToggableBtn showClicked={this.showClicked} showResult={this.state.showResult}/>
                    </div>
                </div>
        )
    }
}

class ToggableBtn extends Component{
    render(){
        const buttonText = this.props.showResult ? 'Get Another Joke' : 'TELL ME';
        return(
            <Button className="Joke-button" onClick={() => { this.props.showClicked() }}>{buttonText}</Button>
        )
    }
}

class Punchline extends Component{
    render(){
        return (
            this.props.showResult ? 
                <div className="Punchline">{this.props.punch}</div>  
                : null
        )
    }
}

class JokeSetup extends Component{
    render(){
    return(<div>
            {
                this.props.jokeLoaded ?
                    <div className="Setup">{this.props.jokeSetup}</div> :
                        this.props.showResult ? <Punchline /> : null
            }
        </div>)
    }
}

export default Joke;