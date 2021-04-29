/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const containerStyles = {
  display: 'inline-block',
  background: '#2980b9',
  padding: '1em 2em',
  borderRadius: '3px',
};

const listElementStyles = {
  display: 'block',
  background: '#9fd8ff',
  border: 'none',
  padding: '.5em 2em',
  margin: '1em auto',
  borderRadius: ' 2px',
  color: '#041f31',
  cursor: 'pointer',
};

const selectedListElementStyles = {
  ...listElementStyles,
  background: '#ffb97c',
};

const CustomList = ({ items = [] }) => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div style={containerStyles}>
      {items.map(({ label, value }) => (
        <button
          type="button"
          key={value}
          onClick={() => setSelectedItem(value)}
          style={
            selectedItem === value
              ? selectedListElementStyles
              : listElementStyles
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default CustomList;
