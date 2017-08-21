import React from 'react';

import styles from './CurrencyHeader.module.scss';

const CurrencyHeader = () => (
  <div className={styles['currency-header']}>
    <div className="row">
      <div className="column column-40">
        <h3 className="display-inline">Coin</h3>
      </div>
      <div className="column text-align-right">
        <span>Price (USD)</span>
      </div>
      <div className="column text-align-right">
        <span>24 hour</span>
      </div>
    </div>
  </div>
);

CurrencyHeader.propTypes = {};

export default CurrencyHeader;
