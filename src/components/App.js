import React, { Component } from 'react';
import Header from './../components/Header';
import './App.css';
import Joke from './../components/Joke';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Header title="Jokes R Us!"/>
        <Joke />
      </div>
    );
  }
}

export default App;
