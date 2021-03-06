import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png';
import '../Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <div className="Nav_logo">
          <Link to="/"><img src={logo} className="Nav_Logo" alt="logo" /></Link>
        </div>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/sponsors">Sponsors</Link></li>
        </ul>
      </div>
    );
  }
}
