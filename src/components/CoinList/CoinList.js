import React from "react";
import Coin from "./Coin/Coin";

const CoinList = props => {
  console.log(props.cryptos);
  return (
    <div>
      {/* CoinList */}
      {props.cryptos.map(({ name, acronym, value, cap }) => (
        <Coin key={acronym} name={name} acronym={acronym} value={value} cap={cap} />
      ))}
    </div>
  );
};

export default CoinList;
