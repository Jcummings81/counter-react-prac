import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <div>
          <Counter />
          <Counter />
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
