/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomRemoveButton from '../../components/CustomRemoveButton';

const initialElements = [
  'Elemento 1',
  'Elemento 2',
  'Elemento 3',
  'Elemento 4',
];

const FirstExample = () => {
  const [list, setList] = React.useState(initialElements);

  const removeElement = (listElement) => {
    setList((allElements) =>
      allElements.filter((current) => current !== listElement)
    );
  };

  const removeElementMemo = useCallback(removeElement, []);

  return (
    <div>
      <h1>Lista</h1>

      <div>
        <div>Elementos</div>

        <ul>
          {list.map((listElement) => (
            <li key={listElement}>
              {listElement}
              <CustomRemoveButton
                type="button"
                listElement={listElement}
                removeElement={removeElementMemo}
              >
                Borrar
              </CustomRemoveButton>
            </li>
          ))}
        </ul>

        <CustomButton onClick={() => setList(initialElements)}>
          Reset
        </CustomButton>
      </div>
    </div>
  );
};

export default FirstExample;
