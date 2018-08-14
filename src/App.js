import React, { Component } from 'react';
import './App.css';
import HomeGuest from './components/HomeGuest.js';
import HomeApp from './components/HomeApp.js';

class App extends Component {

  state = {
    guest: true
  };

  render() {

    let { guest } = this.state;

    function RenderContent() {
      if (guest) {
        return <HomeGuest />
      } else {
        return <HomeApp />
      }
    }

    return (
      RenderContent()
    );
  }
}

export default App;
