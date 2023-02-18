import { createContext, useState } from "react";

const INITIAL_STATE = {
  
  user:JSON.parse(localStorage.getItem("anywhere-user"))?.username || null,
  setUser: () => {},
 
};
export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  console.log(localStorage.getItem("anywhere-user"))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("anywhere-user"))?.username || null);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser: setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
