import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import BabaStudio from './components/BabaStudio';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BabaStudio />
      </React.Fragment>
    );
  }
}

export default App;