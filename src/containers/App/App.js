import React, { Component } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import CoinList from "../../components/CoinList/CoinList";
import * as debounce from "lodash.debounce";

class App extends Component {
  state = {
    cryptos: [
      {
        symbol: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png",
        name: "Bitcoin",
        acronym: "BTC",
        price: 8714,
        change: 2.34,
        cap: 147379083734,
        supply: 147379083734
      },
      {
        symbol: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png",
        name: "Etherum",
        acronym: "ETH",
        price: 688,
        change: 2.34,
        cap: 67585640793,
        supply: 147379083734
      },
      {
        symbol: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png",
        name: "NEO",
        acronym: "NEO",
        price: 84,
        change: 2.34,
        cap: 5515789500,
        supply: 147379083734
      },
      {
        symbol: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png",
        name: "EOS",
        acronym: "EOS",
        price: 5,
        change: 2.34,
        cap: 4141934598,
        supply: 147379083734
      }
    ],
    totalCapValue: 1293123123123,
    searchQuery: "",
    matchedCryptos: []
  };

  componentWillMount() {
    this.setMatchedCryptos();
  }

  searchChangedHandler = event => {
    this.setState({ searchQuery: event.target.value }, this.setMatchedCryptos);
  };

  setMatchedCryptos = debounce(() => {
    const cryptos = [...this.state.cryptos];

    function isMatched(phrase) {
      const regex = new RegExp(`\\b${phrase}.*\\b`, "i");
      return function(crypto) {
        return Object.values(crypto).some(val => regex.test(val));
      };
    }

    const isMatchedWithSearchQuery = isMatched(this.state.searchQuery);
    const matchedCryptos = cryptos.filter(isMatchedWithSearchQuery);
    this.setState({ matchedCryptos });
  }, 250);

  render() {
    return (
      <div>
        <Header
          title="Title"
          cap={this.state.totalCapValue}
        />
        <SearchBar
          handleChange={this.searchChangedHandler}
          searchValue={this.state.searchQuery}
        />
        <CoinList cryptos={this.state.matchedCryptos} />
      </div>
    );
  }
}

export default App;
