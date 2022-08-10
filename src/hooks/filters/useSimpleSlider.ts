import {useState} from 'react';

export const useSimpleSlider = () => {
  const [simpleSlider, setSimpleSlider] = useState([1]);
  const handleChangeSlider = (value: number[]) => {
    if (value.length === 1) {
      return setSimpleSlider(value);
    }
  };
  return {
    simpleSlider,
    handleChangeSlider,
  };
};
