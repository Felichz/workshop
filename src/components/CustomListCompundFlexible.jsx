/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';

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

const CustomListContext = React.createContext();

const useCustomList = () => useContext(CustomListContext);

const CustomList = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <CustomListContext.Provider value={{ selectedItem, setSelectedItem }}>
      <div style={containerStyles}>{children}</div>
    </CustomListContext.Provider>
  );
};

export const ListItem = ({ children, value }) => {
  const { selectedItem, setSelectedItem } = useCustomList();

  return (
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
};

export const NoSelected = ({ children }) => {
  const { selectedItem } = useCustomList();

  if (selectedItem === undefined) {
    return <p style={{ color: 'white' }}>{children}</p>;
  }

  return null;
};
export default CustomList;
