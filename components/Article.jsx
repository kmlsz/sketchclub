import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class Article extends React.Component {
  render() {
    const { title, path, description, author, date } = this.props.data;

    return (
      <div className="article">
        <div className="article-image">
    
        </div>
        <div className="article-title">
          <h3><Link to={prefixLink(`${path}`)}>{title}</Link></h3>
        </div>
        <div className="article-description">
          <p>{description}</p>
        </div>
        <ul className="article-metadata">
          <li className="article-metadata-author">
            <Link to={prefixLink(`${path}`)}>{author}</Link>
          </li>
          <li className="article-metadata-date">
            <Link to={prefixLink(`${path}`)}>{date}</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Article;
