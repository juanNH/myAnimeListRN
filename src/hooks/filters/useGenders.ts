import {useState} from 'react';
import {gendersAddapters} from '../../addapters/genders/gendersAddapter';
import {getGenres} from '../../services/genres/getGenres';

export const useGenders = () => {
  const [gender, setGender] = useState<string>('');
  const handleGenderChange = (id: string) => {
    return setGender(id);
  };
  const getGenders = async () => {
    const {status, data} = await getGenres();
    if (status === 200 && data) {
      const gendersAddapted = gendersAddapters(data);
      return {
        genders: gendersAddapted,
        isError: false,
      };
    }
    return {
      isError: true,
      genders: [],
    };
  };

  return {
    getGenders,
    handleGenderChange,
    gender,
  };
};
