import { createContext, useContext, useState } from "react";

const GlobalState = createContext();
const GlobalSetState = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    audio: [],
    password: "",
    checkPassword: "",
    declaration: false,
  });

  return (
    <GlobalState.Provider value={data}>
      <GlobalSetState.Provider value={setData}>
        {children}
      </GlobalSetState.Provider>
    </GlobalState.Provider>
  );
};

// Custom hook to consume state
export const useGlobalState = () => useContext(GlobalState);
export const useGlobalSetState = () => useContext(GlobalSetState);
