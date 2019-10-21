import React from 'react'

const Coin = props => {
    return (
        <div>
           {props.name}
            <ul className="crypto">
                <li className="crypto__acronym">Acronym: {props.acronym}</li>
                <li className="crypto__value">Current value: ${props.value}</li>
                <li className="crypto__cap">Market cap: ${props.cap}</li>
            </ul>
        </div>
    )
}

export default Coin