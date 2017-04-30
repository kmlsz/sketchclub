import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Header extends Component {
  render() {
    return (
    <div className="header">
      <ul className="header-group">
        <li className="header-group-item">
          <Link to={prefixLink('/')}>Logo
          </Link>
        </li>
        <li className="header-group-item">
          <Link to={prefixLink('/')}>Sketchclub
          </Link>
        </li>
      </ul>
    </div>
    )
  }
}