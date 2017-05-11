import React, { Component } from 'react';
import logo from './logo.svg';
import may11a from './may11a.jpg';
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


        <div>
        </div>
          <img src="http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg" alt="logo" />
        <div>

          <img src={may11a} alt="logo" />
        </div>
        <div>
          <img src="../public/may11b.jpg" alt="logo" />
        </div>
        <div>
          <img src="../public/may11c.jpg" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
