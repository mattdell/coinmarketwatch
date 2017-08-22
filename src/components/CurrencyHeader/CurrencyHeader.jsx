import React from 'react';

import styles from './CurrencyHeader.module.scss';

const CurrencyHeader = () => (
  <div className={styles['currency-header']}>
    <div className="row">
      <div className="column column-30">
        <h3 className="display-inline">Coin</h3>
      </div>
      <div className="column text-align-right hide-sm">
        <span>Market Capital (USD)</span>
      </div>
      <div className="column text-align-right">
        <span>Price (USD)</span>
      </div>
      <div className="column text-align-right hide-sm">
        <span>1 hour</span>
      </div>
      <div className="column text-align-right">
        <span>24 hours</span>
      </div>
      <div className="column text-align-right hide-sm">
        <span>7 days</span>
      </div>
    </div>
  </div>
);

CurrencyHeader.propTypes = {};

export default CurrencyHeader;
