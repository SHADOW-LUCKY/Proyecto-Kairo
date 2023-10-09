import { createContext } from 'react';

export const TempContext = createContext();
export function TempContextProvider(props) {
  const value = 20;
  return (
    <TempContext.Provider value={{ value }}>
      <div>
        {props.children}
      </div>
    </TempContext.Provider>
  )  
}