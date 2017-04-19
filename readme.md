<h1 align="center">Sketchlub</h1>

<p align="center">A directory of Sketch app resources. A <a href="https://github.com/gatsbyjs/gatsby" tagret="_blank">Gatsby</a> fork with <a href="http://postcss.org" target="_blank">PostCSS</a> powers ✨🔮</p>

## Features
- Uses PostCSS
- Includes PostCSS plugins out of the box
- Uses Lost Grid as the grid system
- Easy to customize
- Neat folder structure

## PostCSS plugins
- [postcss-nested](https://github.com/postcss/postcss-nested)
- [postcss-import](https://github.com/postcss/postcss-import)
- [postcss-cssnext](https://github.com/MoOx/postcss-cssnext)
- [rucksack](https://github.com/simplaio/rucksack)
- [lost](https://github.com/peterramsing/lost)

## Folder structure
#### Must edit
- **components** - your react components
- **pages/articles** - the articles for your blog
- **pages/pages** - the pages for your site
- **pages/index.jsx** - the index of your site
- **pages/_template.jsx** - the main template of your site
- **styles/base** - your base styles
- **styles/components** - the styles for your components
- **styles/main.css** - your main stylesheet
- **config.toml** - configuration file

#### May leave as it is
- **utils** - utilities such as typography.js
- **wrappers** - wrappers for Gatsby, such as html, md, and so on.
- **styles/markdown-styles.css** - the styles used for your code blocks (highlight.js)
- **gatsby-node.js** - webpack configuration overrides
- **html.jsx** - the main html tree

## License
MIT License

Copyright (c) 2017 Enrique Benitez (bntz.io)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
