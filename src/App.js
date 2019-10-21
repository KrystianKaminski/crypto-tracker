import React, {Component} from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CoinList from './components/CoinList/CoinList'

class App extends Component {
  render() {
    return (
      <div>
        <Header
          title="Cryptocurrency Market Capitalizations"
          cap={452471038865}
        />
        <SearchBar/>
        <CoinList/>
      </div>
    )
  }
}

export default App;
