import React, { Component } from 'react';
import { Button } from 'reactstrap';
import loading from './../images/imessage-gif-1.gif';
import jokeButton from './../images/jokeButton.png';
import code from './../images/codeicon.png';
import mainsiteicon from './../images/mainsiteicon.png';
import portfolioicon from './../images/portfolioicon.png';


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
        setTimeout(() => {
            fetch('https://official-joke-api.appspot.com/random_joke')
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
        ) }, 2000);
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
                !jokeLoaded ? 
                <div><div className="Joke-Container">
                <JokeSetup 
                            jokeLoading={<img className="Loading-img" src={loading} alt="loading..."/>} 
                        /> 
                </div> 
                <div className="App-button">
                        <ToggableBtn showClicked={this.showClicked} showResult={this.state.showResult}/>
                    </div>
                </div>
                : 
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
            <div className="App-button-items">
            <div className="bottom-header">
                <div className="icon"><a href="https://github.com/drteresavasquez/joke-generator-react"><img src={code} alt="code"/></a></div>
                <div className="icon"><a href="https://portfolio.drteresavasquez.com"><img src={portfolioicon} alt="portfolio"/></a></div>
                <div className="icon"><a href="http://www.drteresavasquez.com"><img src={mainsiteicon} alt="main-site"/></a></div>
                <div className="icon last"></div>
            </div>
            <div className="push-joke-button"><img src={jokeButton} alt="joke-button"/></div>
            <Button className="Joke-button" onClick={() => {this.props.showClicked()}}>{buttonText}</Button>
            </div>
        )
    }
}

class Punchline extends Component{
    render(){
        return (
            this.props.showResult ? 
                <div className="Punchline">{this.props.punch}</div>  
                : ''
        )
    }
}

class JokeSetup extends Component{
    render(){
    return(<div>
            {
                this.props.jokeLoaded ?
                    <div className="Setup">{this.props.jokeSetup}</div> : <div className="Setup loading">{this.props.jokeLoading}</div>
            }
        </div>)
    }
}

export default Joke;
