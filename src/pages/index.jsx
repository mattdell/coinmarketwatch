import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import 'milligram/dist/milligram.css';

import Header from '../components/Header';
import CurrencyHeader from '../components/CurrencyHeader';
import Currency from '../components/Currency';
import Footer from '../components/Footer';

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
        <Helmet
          title="Coinmarket Watch - Cryptocurrency Prices"
          meta={[
            { name: 'description', content: 'Coinmarket Watch - Cryptocurrency Prices' },
            { name: 'keywords', content: 'bitcoin,cryptocurrency,ethereum,ripple,neo,antshares,iota,litecoin,nem,dash,monero' },
            { name: 'author', content: 'Matt Dell' },
          ]}
        />
        <Header color="white" />
        {
          this.state.isLoading && (
            <div className="loader">
              <i className="fa fa-refresh fa-spin fa-5x fa-fw" aria-hidden="true" />
            </div>
          )
        }
        {
          currencyData.length > 0 && (
            <div className="container">
              {
                lastUpdated && (
                  <div className="row">
                    <div className="column">
                      <p className="text-medium">{`Updated: ${lastUpdated.format('HH:mm:ss')}`}</p>
                    </div>
                  </div>
                )
              }
              <CurrencyHeader />
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
        <Footer />
      </div>
    );
  }
}

export default Index;
