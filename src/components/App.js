import React, { Component } from 'react';
import Header from './../components/Header';
import './App.css';
import Joke from './../components/Joke';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Header />
        <Joke />
      </div>
    );
  }
}

export default App;
