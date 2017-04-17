// this file manages the how the wrapper behaviour what to render when based on the layout

import React from 'react';
import Helmet from 'react-helmet';

import Post from '../components/Post';
import Page from '../components/Page';
import ArticlesList from '../containers/ArticlesList';
import PluginsList from '../containers/PluginsList';

import { config } from 'config';
import '../styles/markdown-styles.css';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const layout = post.layout;
    let template;

    // this if manages how to render the md files based on the layout selected in the md file header
    // so if I want to create directory of plugins and needs to set md file layout to plugins which
    // means that this md file will be rendered using pluginslist component, similarly if I want the
    // the plugin page to be rendered as page after clicking on it in the plugin directory I need to set
    // this rule in here to layout === 'plugin' so that page component is used to render it
    if (layout === 'post') {
      template = <Post {...this.props} />;
    } else if (layout === 'page') {
      template = <Page {...this.props} />;
    } else if (layout === 'plugins') {
      template = <PluginsList {...this.props} />;
    } else if (layout === 'plugin') {
      template = <Page {...this.props} />;
    } else if (layout === 'premium') {
      template = <Plugin {...this.props} />;
    } else {
      template = <ArticlesList {...this.props} />;
    }

    return (
     <div>
       <Helmet title={`${config.siteTitle} - ${post.title}`} />
       {template}
     </div>
   );
  }
}

export default MarkdownWrapper;
