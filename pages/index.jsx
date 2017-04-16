import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import { config } from 'config';

export default class Index extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-container">
          <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': 'sample' }]} />

          <div className="logo centre">
            <div className="logo-outerCircle">
              <div className="logo-outerCircle-triangle">
                <div className="logo-outerCircle-triangle-square">
                  <div className="logo-outerCircle-triangle-square-innerCircle"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-container-title">
            <h1>Sketchclub</h1>
          </div>

          <div className="main-container-subtitle">
            <h3>Sketch Club is a dirctory for all things related to Sketch App</h3>
          </div>

          <div className="main-container-links">
            <ul>
              <li>
                <Link to={prefixLink('/about/')}>About</Link>
              </li>
              <li>
                <Link to={prefixLink('/articles/')}>Articles</Link>
              </li>
              <li>
                <Link to={prefixLink('/plugins/')}>Plugins</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="main-footer">
          <p>
            by <a href="https://twitter.com/bntzio" target="_blank">@bntzio</a>
          </p>
        </div>
      </div>
    );
  }
}
