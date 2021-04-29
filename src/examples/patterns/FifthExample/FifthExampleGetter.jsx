/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import CustomCheckbox, {
  useToggler,
} from '../../../components/CustomCheckboxGetter';

const FifthExample = () => {
  const { isChecked, getTogglerProps } = useToggler();

  return (
    <div>
      <CustomCheckbox isChecked={isChecked} {...getTogglerProps()} />

      <button
        type="button"
        {...getTogglerProps({
          onClick: () => console.log('Click toggle button'),
        })}
      >
        Toggle check
      </button>
    </div>
  );
};

export default FifthExample;
