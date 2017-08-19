import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../utils/google-analytics';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div>
        <Helmet
          title='Coinmarket Watch - Cryptocurrency Prices'
          meta={[
            { name: 'description', content: 'Coinmarket Watch - Cryptocurrency Prices' },
            { name: 'keywords', content: 'bitcoin,cryptocurrency,ethereum,ripple,neo,antshares,iota,litecoin,nem,dash,monero' },
            { name: 'author', content: 'Matt Dell' },
          ]}
          link={[
            { rel: 'apple-touch-icon', sizes: '180x180', href: require('../assets/images/favicon/apple-touch-icon.png') },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('../assets/images/favicon/favicon-32x32.png') },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('../assets/images/favicon/favicon-16x16.png') },
            { rel: 'mask-icon', color: '#ff5278', href: require('../assets/images/favicon/safari-pinned-tab.svg') },
          ]}
        />
        {this.props.children}
      </div>
    )
  }
}
