import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged ,signOut} from "firebase/auth";
import { auth } from "../Firebase/Config";
const UserContext = createContext();

const logout = () => {
  return signOut(auth);
};

const UserProvider = ({ children }) => {
  const [user, setUserContext] = useState(null);
  const [loadingScreen, setLoadingScreen] = useState(true);
  useEffect(() => {
    const userCheck = onAuthStateChanged(auth, (currentUser) => {
      setUserContext(currentUser);
      setLoadingScreen(null)
    });

    return userCheck;
  }, []);

  return (
    <UserContext.Provider value={{ user ,loadingScreen, logout}}>{children}</UserContext.Provider>
  );
};

const User = () => useContext(UserContext);
export { UserProvider, User };
