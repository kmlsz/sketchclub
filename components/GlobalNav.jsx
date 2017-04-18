import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class GlobalNav extends Component {
  render() {
    return (
    <div className="global-nav">
      <ul className="global-nav-group">
        <li className="global-nav-group-item">
          <Link to={prefixLink('/')}>Home
          </Link>
        </li>
        <li className="global-nav-group-item">
            <Link to={prefixLink('/about/')}>About
            </Link>
        </li>
        <li className="global-nav-group-item">
          <Link to={prefixLink('/articles/')}>Articles</Link>
        </li>
        <li className="global-nav-group-item">
          <Link to={prefixLink('/plugins/')}>Plugins</Link>
        </li>
        <li className="global-nav-group-item">
          <Link to={prefixLink('/premium/')}>Premium</Link>
        </li>
      </ul>
    </div>
    )
  }
}