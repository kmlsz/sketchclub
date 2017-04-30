import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class PillNav extends Component {
  render() {
    return (
    <div className="pill-nav">
      <ul className="pill-nav-group">
        <li className="pill-nav-group-item">
          <Link to={prefixLink('/')}>All
          </Link>
        </li>
        <li className="pill-nav-group-item">
            <Link to={prefixLink('/about/')}>About
            </Link>
        </li>
        <li className="pill-nav-group-item">
          <Link to={prefixLink('/articles/')}>Articles</Link>
        </li>
        <li className="pill-nav-group-item">
          <Link to={prefixLink('/plugins/')}>Plugins</Link>
        </li>
        <li className="pill-nav-group-item">
          <Link to={prefixLink('/premium/')}>Premium</Link>
        </li>
      </ul>
    </div>
    )
  }
}