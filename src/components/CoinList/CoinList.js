import React from "react";
import Coin from "./Coin/Coin";

const CoinList = props => {
  const isEmptyCryptos = props.cryptos.length === 0
  return (
    <div>
      {isEmptyCryptos ? <div>Brak wyników</div> : props.cryptos.map(({ name, acronym, value, cap }) => (
        <Coin key={acronym} name={name} acronym={acronym} value={value} cap={cap} />
      )) }
    </div>
  );
};

export default CoinList;
