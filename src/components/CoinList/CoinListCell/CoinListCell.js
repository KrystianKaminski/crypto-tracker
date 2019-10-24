import React from 'react';
import PropTypes from 'prop-types';

const CoinListCell = ({ isLarge, isHeader, additionalStyling, children }) => {
  const fieldBorderColor = '#dedede';
  const fieldPadding = 10;
  const largeFieldFlex = '1 0 25%';
  const smallFieldFlex = '1 0 10%';

  const styles = {
    fieldContainer: {
      display: 'flex',
      alignItems: 'center',
      flex: isLarge ? largeFieldFlex : smallFieldFlex,
      fontWeight: isHeader ? 700 : 300,
      paddingTop: fieldPadding,
      paddingBottom: fieldPadding,
      borderBottom: `${isHeader ? 4 : 2}px solid ${fieldBorderColor}`,
    },
  };

  return (
    <div
      style={{
        ...styles.fieldContainer,
        ...additionalStyling,
      }}
    >
      {children}
    </div>
  );
};

CoinListCell.propTypes = {
  isLarge: PropTypes.bool,
  hasBoldText: PropTypes.bool,
  hasThinBorder: PropTypes.bool,
  additionalStyling: PropTypes.object,
  children: PropTypes.element.isRequired,
};

CoinListCell.defaultProps = {
  additionalStyling: {},
};

export default CoinListCell;
