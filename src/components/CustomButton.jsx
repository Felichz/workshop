/* eslint-disable no-console, react/prop-types */
import React from 'react';

const styles = {
  margin: '.5em',
  padding: '0.75em 1.25em',
  border: 'none',
  borderRadius: '5px',
  background: '#2980b9',
  color: 'white',
  cursor: 'pointer',
};

const CustomButton = ({ children, onClick }) => (
  <button type="button" onClick={() => onClick()} style={styles}>
    {children}
  </button>
);

export default CustomButton;
