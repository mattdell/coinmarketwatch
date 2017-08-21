import React from 'react';
import cx from 'classnames';

import styles from './Footer.module.scss';

const Footer = () => (
  <div className={cx('container', styles.footer)}>
    <div className="row">
      <div className="column">
        <div className="center">
          <span>Created by <a href="https://github.com/mattdell/coinmarketwatch">Matt Dell</a></span>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
