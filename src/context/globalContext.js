import { createContext, useContext, useState } from "react";

const GlobalState = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState("data");

  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};

// Custom hook to consume state
export const useGlobalState = () => useContext(GlobalState);
