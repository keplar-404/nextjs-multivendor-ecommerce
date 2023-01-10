import "../styles/globals.css";
import { createContext, useEffect, useState } from "react";
import { checkUser } from "../firebase/Authentication";

export const UserContext = createContext();

export default function App({ Component, pageProps }) {
  const [loggedinUser, setLoggedinUser] = useState({});

  console.log(loggedinUser);

  useEffect(() => {
    if (!loggedinUser.isAuthenticated) {
      checkUser(setLoggedinUser);
    }
  }, [loggedinUser]);
  return (
    <UserContext.Provider value={{ loggedinUser, setLoggedinUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
