import React from 'react';
import cx from 'classnames';

import styles from './Header.module.scss';

export default () => (
  <div className={cx(styles.header, 'container')}>
    <h1>Coinmarket Watch</h1>
  </div>
);
