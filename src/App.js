import React, { Component } from 'react';
import logo from './logo.svg';
import may11a from './may11a.jpg';
import may11b from './may11b.jpg';
import may11c from './may11c.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to our weight loss journey :)</h2>
        </div>
        <p className="App-intro">
          This app is for people who like to lose weight!
        </p>





        <div className="progress-photo-container">
          <img src={may11a} className="progress-photo" alt="" />
        </div>

        <div className="progress-photo-container">
          <img src={may11b} className="progress-photo-turn" alt="" />
        </div>

        <div className="progress-photo-container">
          <img src={may11c} className="progress-photo" alt="" />
        </div>

      </div>
    );
  }
}

export default App;
