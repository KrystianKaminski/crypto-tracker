import React from 'react'

const Coin = ({name, acronym, value, cap}) => {
    return (
        <div>
           {name}
            <ul className="crypto">
                <li className="crypto__acronym">Acronym: {acronym}</li>
                <li className="crypto__value">Current value: ${String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ").trim()}</li>
                <li className="crypto__cap">Market cap: ${String(cap).replace(/\B(?=(\d{3})+(?!\d))/g, " ").trim()}</li>
            </ul>
        </div>
    )
}

export default Coin