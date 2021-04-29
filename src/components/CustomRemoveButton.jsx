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

const CustomRemoveButton = ({ children, listElement, removeElement }) => {
  console.log('CustomRemoveButton render');

  return (
    <button
      type="button"
      onClick={() => removeElement(listElement)}
      style={styles}
    >
      {children}
    </button>
  );
};

export default React.memo(CustomRemoveButton);
