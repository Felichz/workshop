/* eslint-disable no-console, react/prop-types, no-unused-vars */
import React, { useRef, useImperativeHandle } from 'react';

const styles = {
  margin: '.5em',
  padding: '0.75em 1.25em',
  border: '1px solid #2980b950',
  borderRadius: '2px',
  background: '#2980b910',
  color: '#2980b9',
  cursor: 'pointer',
  outline: 'none',
  transition: '100ms',
};

const CustomTextbox = ({ placeholder }, ref) => {
  const textboxRef = useRef(null);

  function animation() {
    textboxRef.current.style.background = '#3498db50';

    setTimeout(() => {
      textboxRef.current.style.background = '#2980b910';
    }, 100);
  }

  useImperativeHandle(ref, () => ({
    focus: () => {
      textboxRef.current.focus();
      animation();
    },
    animation,
  }));

  return (
    <input
      type="text"
      style={styles}
      placeholder={placeholder}
      ref={textboxRef}
    />
  );
};
export default React.forwardRef(CustomTextbox);
