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

const CustomList = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div style={containerStyles}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          selectedItem,
          setSelectedItem,
        })
      )}
    </div>
  );
};

export const ListItem = ({
  children,
  value,
  selectedItem,
  setSelectedItem,
}) => (
  <button
    type="button"
    key={value}
    onClick={() => setSelectedItem(value)}
    style={
      selectedItem === value ? selectedListElementStyles : listElementStyles
    }
  >
    {children}
  </button>
);

export const NoSelected = ({ selectedItem, children }) => {
  if (selectedItem === undefined) {
    return <p style={{ color: 'white' }}>{children}</p>;
  }

  return null;
};
export default CustomList;
