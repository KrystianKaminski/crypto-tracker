import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CoinListCell from '../CoinListCell/CoinListCell';
import CoinListRow from '../CoinListRow/CoinListRow';

import formatAsCurrency from '../../../shared/utils/helpers';

const Symbol = styled.img`
  width: 36px;
  height: 36px;
  margin: 10px;
`;

const percentChangePlusColor = '#04BF12';
const percentChangeMinusColor = '#dd2c00';
const PercentChange = styled.div`
  color: ${props =>
    props.change > 0 ? percentChangePlusColor : percentChangeMinusColor};
`;

const Coin = ({ symbol, name, change, cap, supply, price, acronym }) => {
  return (
    <CoinListRow>
      <CoinListCell isLarge>
        <Symbol src={symbol} alt={`${name}'s symbol`} />
        <div>{name}</div>
      </CoinListCell>
      <CoinListCell>{formatAsCurrency(price)}</CoinListCell>
      <CoinListCell>
        <PercentChange change={change}>{change} %</PercentChange>
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
