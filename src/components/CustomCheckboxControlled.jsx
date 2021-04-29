/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

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

const CustomCheckbox = ({
  isChecked: isCheckedControlled,
  onChange = () => {},
}) => {
  const [isChecked, setIsChecked] = useState();
  const toggleChecked = () => setIsChecked(!isChecked);

  useEffect(() => {
    onChange(isChecked);
  }, [isChecked]);

  const finalIsChecked = isCheckedControlled ?? isChecked;

  return (
    <button type="button" onClick={toggleChecked} style={buttonStyles}>
      <div style={finalIsChecked ? checkedStyles : styles} />
    </button>
  );
};

export default CustomCheckbox;
