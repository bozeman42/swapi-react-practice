import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/info">Info</Link>
              </li>
              <li>
                <Link to="/vehicles">Vehicles</Link>
              </li>
            </ul>
          </nav>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
    );
  }
}

export default Header;
