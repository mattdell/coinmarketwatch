import React from 'react';
import numeral from 'numeral';
import cx from 'classnames';

import styles from './Currency.module.scss';

const Currency = (props) => {
  const changePercent1h = numeral(props.percent_change_24h);
  const isChangePercent1hPositive = changePercent1h.value() >= 0;

  return (
    <div className={styles.currency}>
      <div className="row">
        <div className="column column-40">
          <h3 className="display-inline">{props.name}</h3>
        </div>
        <div className="column text-align-right">
          <span>{numeral(props.price_usd).format('$0,0.00')}</span>
        </div>
        <div className="column text-align-right">
          <span className={cx({ red: !isChangePercent1hPositive, green: isChangePercent1hPositive })}>{changePercent1h.format('+0,0.00')}</span>
        </div>
      </div>
    </div>
  );
};

Currency.propTypes = {
  // id: React.PropTypes.string,
  name: React.PropTypes.string,
  // symbol: React.PropTypes.string,
  // rank: React.PropTypes.string, 
  price_usd: React.PropTypes.string,
  // price_btc: React.PropTypes.string,
  // market_cap_usd: React.PropTypes.string,
  // available_supply: React.PropTypes.string,
  // total_supply: React.PropTypes.string,
  // percent_change_1h: React.PropTypes.string,
  percent_change_24h: React.PropTypes.string, 
  // percent_change_7d: React.PropTypes.string,
  // last_updated: React.PropTypes.string,
};

export default Currency;
