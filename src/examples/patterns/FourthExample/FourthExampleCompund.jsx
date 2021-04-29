import React from 'react';
import CustomList, {
  ListItem,
  NoSelected,
} from '../../../components/CustomListCompund';

const FirstExample = () => (
  <div>
    <h1>Lista</h1>

    <CustomList>
      <ListItem value={1}>Elemento 1</ListItem>
      <ListItem value={2}>Elemento 2</ListItem>
      <ListItem value={3}>Elemento 3</ListItem>
      <ListItem value={4}>Elemento 4</ListItem>
    </CustomList>
  </div>
);

export default FirstExample;
