import React from 'react'
import PropTypes from 'prop-types'

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

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Coin.defaultProps = {
    value: '-',
    acronym: "0",
    cap: '0'
}

export default Coin