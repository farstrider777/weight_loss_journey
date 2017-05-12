import React, { Component } from 'react';
import logo from './logo.svg';
import may11a from './may11a.png';
import may11b from './may11b.jpg';
import may12a from './may12a.png';
import may12b from './may12b.jpg';
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
          <img src={may11b} className="progress-photo-turn" alt="" />
        </div>

        <div>
          Today was May 11, 2017. I started two weeks ago at 228.6 lbs
          I am down 9 pounds already! Amanda has been at it for 2 years and
          she has lost 50 pounds she is down to 215 lbs!
        </div>

        <div className="progress-photo-container">
          <img src={may12a} className="progress-photo" alt="" />
          <img src={may12b} className="progress-photo" alt="" />
        </div>

        <div className="date-container">May 12, 2017</div>
        <div className="weight-container">Josh - 217.4 lbs</div>
        <div className="weight-container">Amanda - 213.0 lbs</div>
      </div>


    );
  }
}

class App2 extends Component{
  constructor(props) {
     super(props);

     this.state = {
        data: 'for Josh'
     }

     this.updateState = this.updateState.bind(this);

     this.state2 = {
        data2: 'for Amanda'
     }

     this.updateState2 = this.updateState2.bind(this);

  };

  updateState(e) {
     this.setState({data: e.target.value});
  }

  updateState2(e) {
     this.setState({data: e.target.value});
  }

  render() {
     return (
        <div>
           <input type="text" value={this.state.data}
              onChange={this.updateState} />
           <h4>{this.state.data}</h4>
           <input type="text" value={this.state2.data2}
              onChange={this.updateState2} />
           <h4>{this.state.data2}where</h4>
        </div>
     );
  }
}

export {App, App2};
