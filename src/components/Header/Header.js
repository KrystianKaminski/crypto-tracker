import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatAsCurrency from '../../shared/utils/helpers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Header = ({ title, cap }) => (
  <Container>
    <Title>{title}</Title>
    <p>Market Cap: {formatAsCurrency(cap)}</p>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string,
  cap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Header;
