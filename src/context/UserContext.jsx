import { createContext, useState } from "react";

const INITIAL_STATE = {
  acessToken: null,
  user: localStorage.getItem("anywhere-user") || null,
  setUser: () => {},
  setAccessToken: () => {},
};
export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("anywhere-user"));
  const [acessToken, setAccessToken] = useState();
  return (
    <UserContext.Provider
      value={{
        user,
        setUser: setUser,
        acessToken,
        setAccessToken: setAccessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
