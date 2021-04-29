/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import CustomCheckbox from '../../../components/CustomCheckboxControlled';

const FifthExample = () => {
  const [checked, setChecked] = useState();
  const [checkTimes, setCheckTimes] = useState(0);

  const handleCheckChange = (value) => {
    if (checkTimes < 5) {
      setChecked(value);
      setCheckTimes((current) => current + 1);
    }
  };

  return (
    <div>
      <CustomCheckbox isChecked={checked} onChange={handleCheckChange} />
      {checkTimes}
    </div>
  );
};

export default FifthExample;
