import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>Cryptocurrency Market Capitalizations</h1>
            <div className="info">
                <div className="info__crypto">
                    Cryptocurrencies: 1494 / Markets: 8195
                </div>
                <div className="info__crypto">
                   Market Cap: $591 331 002 804 / 24h Vol: $22 764 514 250 / BTC Dominance: 34.3%
                </div>
            </div>
        </div>
    )
}

export default Header