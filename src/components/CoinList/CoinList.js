import React from 'react'
import Coin from './Coin/Coin'

const CoinList = (props) => {
    return (
        <div>
            CoinList
            <Coin
                name="Bitcoin"
                acronym="BTC"
                value={11000}
                cap={188698026949}
            />
        </div>
    )
}

export default CoinList