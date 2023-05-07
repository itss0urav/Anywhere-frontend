import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { PostServices } from "../services/postServices";

const INITIAL_STATE = {
  
  user:JSON.parse(localStorage.getItem("anywhere-user"))?.username || null,
  setUser: () => {},
  userId:JSON.parse(localStorage.getItem("anywhere-user"))?.userId || null,
  posts:[],
  role:JSON.parse(localStorage.getItem("anywhere-user"))?.role || null,
  setPosts:() => {}
 
};
export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
  const postServices = new PostServices()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("anywhere-user"))?.username || null);
  const [posts, setPosts] = useState([])
  useQuery({
    queryFn: postServices.getPosts,
    queryKey: ["posts"],
    onSuccess: (data) => {
      console.log(data);
      setPosts(data);
    },
    refetchOnWindowFocus:false
  });
  return (
    <UserContext.Provider
      value={{
        ...INITIAL_STATE,
        user,
        setUser: setUser,
        posts,
        setPosts
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
