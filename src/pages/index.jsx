import React from 'react';
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
    request('https://api.coinmarketcap.com/v1/ticker/?limit=12')
      .then((response) => {
        this.setState({
          isLoading: false,
          response,
        });
      });
  }

  fetchAllCurrencies() {
    this.setState({
      isLoading: true,
      hasSelectedShowMoreButton: true,
      response: null,
    });

    request('https://api.coinmarketcap.com/v1/ticker/')
      .then((response) => {
        this.setState({
          isLoading: false,
          response,
        });
      });
  }

  render() {
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
          this.state.response && (
            <div className="container">
              {
                this.state.response.map(currency => (
                  <Currency key={currency.id} {...currency} />
                ))
              }
              {
                !this.state.hasSelectedShowMoreButton && (
                  <div className="button-container center">
                    <button className="button button-outline" onClick={() => this.fetchAllCurrencies()}>See all</button>
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
