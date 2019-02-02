/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        {/* <section className="sitemap">
          <div>
            <h5>Studys</h5>
            <a href={this.docUrl('javascript-desc', this.props.language)}>
              Fed
            </a>
            <a href={this.docUrl('algorithm-desc', this.props.language)}>
              Algorithm
            </a>
          </div>
          <div>
            <h5>Github</h5>
            <a href="https://github.com/yl2014" target="_blank">
              YL2014
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://yl.frontjs.cc">
              Blog
            </a>
            <a href="https://www.cnblogs.com/yl2014" target="_blank">Cnblogs</a>
          </div>
        </section> */}

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
