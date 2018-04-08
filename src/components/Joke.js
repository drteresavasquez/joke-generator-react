import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

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
        this.setState({
            showResult: true,
        })
    }

    getAnotherClicked = () => {
        this.setState({
            jokeLoaded: false,
            objResult: {},
            showResult: false,
            error: null
        }, this.getJoke());
    }

    render(){
        const {error, jokeLoaded, objResult, showResult} = this.state;
        return (
            error ? <div>Error: {error.message}</div> : 
            !jokeLoaded ? <div>Loading...</div> : 
            <div>
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
        )
    }
}

function Punchline(props){
    return (
        props.showResult ? <div><h5>{props.punch} LOL! LOL! LOL!</h5>
        <Button color="secondary" onClick={props.getAnotherClicked}>Get Another Joke</Button></div> :
        null
    )
}

function JokeSetup(props){
    return(
        <Card body inverse style={{ backgroundColor: '#000000', borderColor: '#85144b' }}>
         {props.jokeLoaded ?
            <span>
               <CardTitle>Joke About {props.jokeType.charAt(0).toUpperCase() + props.jokeType.slice(1)}</CardTitle>
               <CardText>{props.jokeSetup}</CardText>
               {/* <Button color="info" onClick={props.showClicked}>TELL ME</Button> */}
            </span>
            :
            <CardTitle>Getting a Joke</CardTitle>
         }
         {props.showResult ?
            <div> </div>
            :
            <Button color="info" onClick={() => { props.showClicked(props.index) }}>TELL ME</Button>
         }
      </Card>
    )
}

export default Joke;