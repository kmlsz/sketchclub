import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import { config } from 'config';

export default class error extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-container">
          <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': 'sample' }]} />
          <Link to={prefixLink('/')}>
            <div className="logo centre">
              <div className="logo-outerCircle">
                <div className="logo-outerCircle-triangle">
                  <div className="logo-outerCircle-triangle-square">
                    <div className="logo-outerCircle-triangle-square-innerCircle"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="main-container-title">
            <h1>404</h1>
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
