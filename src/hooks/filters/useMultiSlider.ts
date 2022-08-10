import {useState} from 'react';

export const useMultiSlider = () => {
  const [multiSlider, setMultiSlider] = useState([1, 10]);
  const handleChangeSlider = (value: number[]) => {
    if (value.length > 1) {
      return setMultiSlider(value);
    }
  };
  return {
    multiSlider,
    handleChangeSlider,
  };
};
