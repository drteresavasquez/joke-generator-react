import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Joke extends Component{

    // ********* ONE METHOD OF SETTING STATE
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         jokeLoaded: false,
    //         objResult: {},
    //         showResult: false,
    //         error:null
    //     }
    // }

    state = {
        jokeLoaded: false,
        objResult: {},
        showResult: false,
        error:null
    }

    componentDidMount(){
        console.log("Comp Did Mount")
        this.getJoke()
    }

    getJoke(){
        console.log("Get Joke()")
    }

    render(){
        const {error, jokeLoaded, objResult, showResult} = this.state;
        return (
            error ? <div>Error: {error.message}</div> : 
            !jokeLoaded ? <div>Loading...</div> : 
            <div><h2>Got A Joke!</h2></div>
        )
    }
}

export default Joke;