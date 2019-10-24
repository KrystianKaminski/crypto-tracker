import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import sharedStyles from '../../../shared/styles/styles';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: ${sharedStyles.contentPadding};
  padding-right: ${sharedStyles.contentPadding};

  @media (max-width: 800px) {
    padding-left: ${sharedStyles.smallContentPadding};
    padding-right: ${sharedStyles.smallContentPadding};
    font-size: 0.8em;
  }
`;

const CoinListRow = ({ children }) => <Container>{children}</Container>;

CoinListRow.propTypes = {
  additionalStyling: PropTypes.object,
  children: PropTypes.node.isRequired,
};

CoinListRow.defaultProps = {
  additionalStyling: {},
};

export default CoinListRow;
