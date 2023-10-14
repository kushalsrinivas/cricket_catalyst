import { createContext, useState } from "react";
import { account, ID } from "./appwrite";
export const StoreContext = createContext({
  user: null,
  loading: null,
  login: () => {},
  register: () => {},
  logout: () => {},
});

export const StoreProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    const session = await account.createEmailSession(email, password);
    console.log(session);
    setLoggedInUser(await account.get());
  };

  const register = async (email, password, name) => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  const context = {
    user: loggedInUser,
    login: login,
    register: register,
    logout: logout,
  };

  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  );
};
