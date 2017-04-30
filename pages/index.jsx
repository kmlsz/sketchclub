import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import { config } from 'config';
import Header from '../components/Header';
import PillNav from '../components/PillNav';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <PillNav />
        <div className="feed">
          <div className="feed-container">
            <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': 'sample' }]} />

            <div className="feed-container-title">
              <h1>Sketchclub</h1>
            </div>

            <div className="feed-container-subtitle">
              <h3>Sketch Club is a dirctory for all things related to Sketch App</h3>
            </div>

            <div className="feed-container-links">
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
                <li>
                  <Link to={prefixLink('/premium/')}>Premium</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="feed-footer">
            <p>
              by <a href="https://twitter.com/bntzio" target="_blank">@bntzio</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
