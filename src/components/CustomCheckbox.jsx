/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const buttonStyles = {
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
};

const styles = {
  width: '2em',
  height: '2em',
  background: '#9cccec',
  border: '2px solid #2980b9',
  borderRadius: '3px',
  transition: '100ms',
};

const checkedStyles = { ...styles, background: '#2980b9' };

export const useToggler = () => {
  const [isChecked, setIsChecked] = useState();
  const toggleChecked = () => setIsChecked(!isChecked);

  const togglerProps = {
    'aria-pressed': isChecked,
    onClick: toggleChecked,
  };

  return { isChecked, toggleChecked, togglerProps };
};

const CustomCheckbox = ({ isChecked, onClick }) => (
  <button type="button" onClick={onClick} style={buttonStyles}>
    <div style={isChecked ? checkedStyles : styles} />
  </button>
);

export default CustomCheckbox;
