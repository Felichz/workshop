/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import CustomTextbox from '../../components/CustomTextbox';
import CustomButton from '../../components/CustomButton';

const ThirdExample = () => {
  const textboxRef = useRef(null);

  return (
    <div>
      <div>
        <CustomTextbox type="text" ref={textboxRef} placeholder="something" />
        <CustomButton type="button" onClick={() => textboxRef.current?.focus()}>
          Focus
        </CustomButton>
        <CustomButton
          type="button"
          onClick={() => textboxRef.current?.animation()}
        >
          Animation
        </CustomButton>
      </div>
      <div>
        <CustomTextbox type="text" placeholder="something" />
      </div>
    </div>
  );
};

export default ThirdExample;
