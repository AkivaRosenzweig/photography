import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './Home.js';

// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
      <Home
        key={"homeMode"}
      />
    );
  }


}
