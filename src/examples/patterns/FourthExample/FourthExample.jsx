import React from 'react';
import CustomList from '../../../components/CustomList';

const FirstExample = () => (
  <div>
    <h1>Lista</h1>

    <CustomList
      items={[
        {
          label: 'Elemento 1',
          value: 1,
        },
        {
          label: 'Elemento 2',
          value: 2,
        },
        {
          label: 'Elemento 3',
          value: 3,
        },
        {
          label: 'Elemento 4',
          value: 4,
        },
      ]}
    />
  </div>
);

export default FirstExample;
