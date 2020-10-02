import React, { createContext, useState } from 'react';

export const bigMacDataContext = createContext();

const BigMacDataContextProvider = (props) => {
  const [bigMacData, setBigMacData] = useState();

  return (
    <BigMacDataContextProvider.Provider value={[bigMacData, setBigMacData]}>
      {props.children}
    </BigMacDataContextProvider.Provider>
  );
};

export default BigMacDataContextProvider;
