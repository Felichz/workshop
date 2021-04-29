/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import CustomButton from '../../components/CustomButton';

const delayThings = () => {
  let count;
  for (let i = 0; i <= 150000000; i++) {
    count += 1;
  }
};

const initialElements = [
  'Elemento 1',
  'Elemento 2',
  'Elemento 3',
  'Elemento 4',
];

const listStyles = {
  height: '100px',
  overflow: 'scroll',
  overflowY: 'scroll',
  overflowX: 'hidden',
  background: '#EEE',
  padding: '1em 2em',
  width: '200px',
};

const SecondExample = () => {
  const [list, setList] = React.useState(initialElements);
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const listElement = listRef.current;

    listElement.scrollTop = listElement.scrollHeight;
  }, [list]);

  const removeElement = (listElement) => {
    setList((allElements) =>
      allElements.filter((current) => current !== listElement)
    );
  };
  const addElement = () => {
    setList((allElements) => [
      ...allElements,
      `Elemento ${allElements.length + 1}`,
    ]);
  };

  return (
    <div>
      <h1>Lista scrolleable</h1>

      <div>
        <div>Elementos</div>

        <ul style={listStyles} ref={listRef}>
          {list.map((listElement) => (
            <li key={listElement}>{listElement}</li>
          ))}
        </ul>

        <CustomButton onClick={addElement}>Agregar elemento</CustomButton>

        <CustomButton onClick={() => setList(initialElements)}>
          Reset
        </CustomButton>
      </div>
    </div>
  );
};

export default SecondExample;
