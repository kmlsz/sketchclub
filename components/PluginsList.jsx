import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import uuid from 'node-uuid';
import moment from 'moment';
import _ from 'lodash';

import Plugin from './Plugin';

class PluginsList extends React.Component {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      const body = document.getElementsByTagName('body');
      const css = body[0].style;
      css.color = '#fff';
      css.backgroundColor = '#4938aa';
    }
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      const body = document.getElementsByTagName('body');
      const css = body[0].style;
      css.color = '#fff';
      css.backgroundColor = '#2b4496';
    }
  }
  renderPosts(route) {
    const posts = [];
    route.pages.map((page) => {
      if (page.data.layout === 'plugin') {
        posts.push(page);
      }
    });

    const ordered = _.sortBy(posts, (o) => {
      return new moment(o.data.date);
    }).reverse();

    return ordered.map((orderedPost) => {
      return <Plugin key={uuid()} data={orderedPost.data} />;
    });
  }
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <div className="plugins-list">
          <div className="plugins-list-container">
            <Link to={prefixLink('/')}>
              <div className="logo fixed">
                <div className="logo-outerCircle">
                  <div className="logo-outerCircle-triangle">
                    <div className="logo-outerCircle-triangle-square">
                      <div className="logo-outerCircle-triangle-square-innerCircle" /></div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="plugins-list-container-title">
              <h1>{post.title}</h1>
              <div className="plugins-list-container-body">
                <div dangerouslySetInnerHTML={{ __html: post.body }} /></div>
            </div>
          </div>
          <div className="plugins-list-container-posts">
            {this.renderPosts(route)}
          </div>
        </div>
      </div>
    );
  }
}

export default PluginsList;
