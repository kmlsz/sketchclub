import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import GlobalNav from './GlobalNav';

class Page extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    
    return (
      <div>
        <GlobalNav />
        <div className="page">
          <div className="page-container">
            <div className="page-container-title">
              <h1>{post.title}</h1>
              <p>{post.author}</p>
              <div className="page-container-body">
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Page;
