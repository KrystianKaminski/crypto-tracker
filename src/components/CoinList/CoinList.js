import React from "react";
import Coin from "./Coin/Coin";

const CoinList = props => {
  return (
    <div>
      CoinList
      <Coin name="Bitcoin" acronym="BTC" value={11000} cap={188698026949} />
      <Coin name="Etherum" acronym="ETH" value={842} cap={82581287147} />
      <Coin name="NEO" acronym="NEO" value={117} cap={7624760000} />
      <Coin name="EOS" acronym="EOS" value={7} cap={5513844716} />
      <Coin name="test"/>
    </div>
  );
};

export default CoinList;
