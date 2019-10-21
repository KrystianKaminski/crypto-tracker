import React from 'react'

const Coin = props => {
    return (
        <div>
            Bitcoin
            <ul className="crypto">
                <li className="crypto__acronym">Acronym: BTC</li>
                <li className="crypto__value">Current value: 8.800 $</li>
                <li className="crypto__cap">Market cap: 2,3 mld</li>
            </ul>
        </div>
    )
}

export default Coin