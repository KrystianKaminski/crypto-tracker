import React from 'react';
import PropTypes from 'prop-types';
import formatAsCurrency from '../../../shared/utils/helpers';

import CoinListCell from '../CoinListCell/CoinListCell';
import CoinListRow from '../CoinListRow/CoinListRow';

const malachite = '#04BF12';
const grenadier = '#dd2c00';
const styles = {
  coinSymbol: {
    width: 36,
    height: 36,
    margin: 10,
  },
  percentChangePlus: {
    color: malachite,
  },
  percentChangeMinus: {
    color: grenadier,
  },
};

const Coin = ({ symbol, name, change, cap, supply, price, acronym }) => {
  return (
    <CoinListRow>
      <CoinListCell isLarge>
        <img src={symbol} alt={`${name}'s symbol`} style={styles.coinSymbol} />
        <div>{name}</div>
      </CoinListCell>
      <CoinListCell>{formatAsCurrency(price)}</CoinListCell>
      <CoinListCell
        additionalStyling={
          change >= 0 ? styles.percentChangePlus : styles.percentChangeMinus
        }
      >
        {change} %
      </CoinListCell>
      <CoinListCell>{formatAsCurrency(cap)}</CoinListCell>
      <CoinListCell>
        {formatAsCurrency(supply)}
        {` ${acronym} `}
      </CoinListCell>
    </CoinListRow>
  );
};

Coin.propTypes = {
  symbol: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  change: PropTypes.number,
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  supply: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  acronym: PropTypes.string,
};

Coin.defaultProps = {
  value: '-',
  acronym: 'Unknown',
  cap: 'Unknown',
};

export default Coin;
