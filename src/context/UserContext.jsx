import { createContext, useState } from "react";

const INITIAL_STATE = {
  
  user:JSON.parse(localStorage.getItem("anywhere-user"))?.username || null,
  setUser: () => {},
  userId:JSON.parse(localStorage.getItem("anywhere-user"))?.userId || null
 
};
export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  console.log(localStorage.getItem("anywhere-user"))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("anywhere-user"))?.username || null);
  return (
    <UserContext.Provider
      value={{
        ...INITIAL_STATE,
        user,
        setUser: setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
