import React from 'react'

const Coin = ({name, acronym, value, cap}) => {
    return (
        <div>
           {name}
            <ul className="crypto">
                <li className="crypto__acronym">Acronym: {acronym}</li>
                <li className="crypto__value">Current value: ${value}</li>
                <li className="crypto__cap">Market cap: ${cap}</li>
            </ul>
        </div>
    )
}

export default Coin