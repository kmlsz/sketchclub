import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class Plugin extends React.Component {
  render() {
    const { title, path, description, author, img } = this.props.data;

    return (
      <div className="plugin">
        <div className="plugin-title">
          <h3><Link to={prefixLink(`${path}`)}>{title}</Link></h3>
        </div>
        <div className="plugin-description">
          <p>{author}</p>
        </div>
        <div className="plugin-img">
          <img src={img} alt="test"/>
        </div>
        <div className="plugin-description">
          <p>{description}</p>
        </div>
        <div className="plugin-read">
          <Link to={prefixLink(`${path}`)}>Download</Link>
        </div>
      </div>
    );
  }
}

export default Plugin;
