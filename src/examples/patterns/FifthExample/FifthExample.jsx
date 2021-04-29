/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CustomCheckbox, { useToggler } from '../../../components/CustomCheckbox';

const FifthExample = () => {
  const { isChecked, togglerProps } = useToggler();

  return (
    <div>
      <CustomCheckbox isChecked={isChecked} {...togglerProps} />

      <button type="button" {...togglerProps}>
        Toggle check
      </button>
    </div>
  );
};

export default FifthExample;
