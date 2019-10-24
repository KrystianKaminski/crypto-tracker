import React from 'react';
import Coin from './Coin/Coin';
import CointListHead from './CoinListHead/CoinListHead';

const CoinList = props => {
  const isEmptyCryptos = props.cryptos.length === 0;
  return (
    <div>
      <CointListHead />
      {isEmptyCryptos ? (
        <div>Brak wyników</div>
      ) : (
        props.cryptos.map(
          ({ symbol, name, change, cap, supply, price, acronym }) => (
            <Coin
              key={acronym}
              symbol={symbol}
              change={change}
              supply={supply}
              name={name}
              acronym={acronym}
              price={price}
              cap={cap}
            />
          ),
        )
      )}
    </div>
  );
};

export default CoinList;
