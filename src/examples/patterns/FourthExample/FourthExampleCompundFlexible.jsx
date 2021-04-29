import React from 'react';
import CustomList, {
  ListItem,
  NoSelected,
} from '../../../components/CustomListCompundFlexible';

const FirstExample = () => (
  <div>
    <h1>Lista</h1>

    <CustomList>
      <NoSelected>Selecciona un item</NoSelected>

      <ListItem value={1}>Elemento 1</ListItem>
      <ListItem value={2}>Elemento 2</ListItem>
      <ul>
        <li>
          <ListItem value={3}>Elemento 3</ListItem>
        </li>
        <li>
          <ListItem value={4}>Elemento 4</ListItem>
        </li>
      </ul>
    </CustomList>
  </div>
);

export default FirstExample;
