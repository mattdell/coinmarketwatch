import React from 'react';
import moment from 'moment';
import 'milligram/dist/milligram.css';

import Header from '../components/Header';
import Currency from '../components/Currency';

import { request } from '../utils/ApiUtils';

import '../../css/pages/index.scss';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasSelectedShowMoreButton: false,
      response: [],
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    request('https://api.coinmarketcap.com/v1/ticker/')
      .then((response) => {
        this.setState({
          isLoading: false,
          response,
          lastUpdated: moment.utc(),
        });

        setTimeout(() => this.fetchCurrencies(), 10000);
      });
  }

  showAllCurrencies() {
    this.setState({
      hasSelectedShowMoreButton: true,
    });
  }

  render() {
    const { response, lastUpdated, hasSelectedShowMoreButton } = this.state;
    const currencyData = !hasSelectedShowMoreButton
      ? response.slice(0, 10)
      : response;

    return (
      <div>
        <Header color="white" />
        {
          this.state.isLoading && (
            <div className="loader">
              <i className="fa fa-refresh fa-spin fa-5x fa-fw" aria-hidden="true" />
            </div>
          )
        }
        {
          currencyData && (
            <div className="container">
              {
                lastUpdated && (
                  <div className="row">
                    <div className="column">
                      <p>{`Last updated: ${lastUpdated.format()}`}</p>
                    </div>
                  </div>
                )
              }
              {
                currencyData.map(currency => (
                  <Currency key={currency.id} {...currency} />
                ))
              }
              {
                !hasSelectedShowMoreButton && (
                  <div className="button-container center">
                    <button className="button button-outline" onClick={() => this.showAllCurrencies()}>See all</button>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default Index;
