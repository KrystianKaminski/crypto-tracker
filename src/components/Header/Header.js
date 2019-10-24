import React from 'react';
import PropTypes from 'prop-types';
import formatAsCurrency from '../../utils/helpers';

const headerContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 36,
};

const appTitle = {
  fontWeight: 'bold',
};

const Header = ({ title, cap }) => {
  return (
    <div style={headerContainer}>
      <h1 style={appTitle}>{title}</h1>
      <div className="info">
        <div className="info__crypto">
          Cryptocurrencies: 1494 / Markets: 8195
        </div>
        <div className="info__crypto">Market Cap: ${formatAsCurrency(cap)}</div>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  cap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Header;
