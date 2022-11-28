import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const UserContext = createContext({ user: {}, updateUser: () => {} });
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const storageUser = await AsyncStorage.getItem('@user');
        if (storageUser) {
          const v = JSON.parse(storageUser);
          setUser(v);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  function updateUser(userData) {
    setUser(userData);
  }
  return (
    <UserContext.Provider value={{ user: user, updateUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
