import React, { Component } from 'react';
import './nav.css';

class nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><link to="./presentation">Présentation Mini-Entreprises</li>
          <li><link to="./actualites">Actualités des Mini-Entreprises</li>
          <li><link to="./merci">Merci</li>
        </ul>
      </div>
    );
  }
}

export default nav;
