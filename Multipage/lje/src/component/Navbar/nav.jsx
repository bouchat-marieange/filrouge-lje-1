import React, { Component } from 'react';
import './nav.css';

class nav extends Component {
  render() {
    return (
      <div>
          <Navbar brand='logo' right>
              <NavItem href='get-started.html'>Présentation</NavItem>
              <NavItem href='components.html'>Actualités</NavItem>
              <NavItem href='get-started.html'>Entreprise 2016-2018</NavItem>
              <NavItem href='components.html'>Actualités</NavItem>
              <NavItem href='components.html'>Actualités</NavItem>
          </Navbar>
      </div>
    );
  }
}

export default nav;
