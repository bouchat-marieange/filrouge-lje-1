import React, { Component } from 'react';
import Contact from './component/Contact/contact.js';
import Entreprise20162018 from './component/entreprise20162018/entreprise20162018.js';
/*import './App.css';
import '../../nav.jsx';*/


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Steve</h1>
          <Contact/>
          <Entreprise20162018/>
      </div>
    );
  }
}

export default App;
