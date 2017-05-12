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
          <img src="https://rlv.zcache.com/inspiring_weight_loss_quote_magnet-re81c83f0b74843db90bf4a119aa1e12a_x7js9_8byvr_324.jpg" className="App-logo" alt="logo" />
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

        <div>
          Today was May 11, 2017. I started two weeks ago at 228.6 lbs
          I am down 9 pounds already! Amanda has been at it for 2 years and
          she has lost 50 pounds she is down to 215 lbs!
        </div>

        <div className="date-container">May 12, 2017</div>
        <div className="weight-container">unknown</div>
      </div>


    );
  }
}

export default App;
