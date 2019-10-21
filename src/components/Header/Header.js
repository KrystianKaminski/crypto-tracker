import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, cap }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="info">
        <div className="info__crypto">
          Cryptocurrencies: 1494 / Markets: 8195
        </div>
        <div className="info__crypto">
          Market Cap: $
          {String(cap)
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ").trim()}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  cap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Header;
