import React, { Component } from 'react';
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="centered">
        <div className="triangle top hoverable">
          <div  className="inside top">
            <label>top</label>
            <button>button</button>
            </div>
        </div>
        <div className="triangle left"/>
        <div className="triangle bottom"/>
        <div className="triangle right"/>
      </div>
    );
  }
}

export default App;
