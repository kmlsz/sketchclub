import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import GlobalNav from '../components/GlobalNav';

class Post extends React.Component {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      const body = document.getElementsByTagName('body');
      const css = body[0].style;
      css.color = '#333';
      css.backgroundColor = '#fff';
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
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <GlobalNav / >
        <div className="post">
          <div className="post-container">
            <div className="post-container-title">
              <h1>{post.title}</h1>
              <p>{post.author}</p>
              <div className="post-container-body">
                <div dangerouslySetInnerHTML={{ __html: post.body }} /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
