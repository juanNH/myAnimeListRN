import React, {createContext} from 'react';
import {Home} from './Home';

type HomeScreenTypes = {};
export const HomeScreenContext = createContext({} as HomeScreenTypes);

export const HomeScreen = () => {
  return (
    <HomeScreenContext.Provider value={{}}>
      <Home />
    </HomeScreenContext.Provider>
  );
};
