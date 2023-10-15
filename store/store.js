import { createContext, useState } from "react";
import { data } from "./data";
import { useRouter } from "next/router";
export const StoreContext = createContext({
  user: null,
  loading: null,
  login: () => {},
  register: () => {},
  logout: () => {},
});
export const StoreProvider = (props) => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    const user = data.users.find((user, id) => user.mail === email);
    if (user) {
      if (user.pwd === password) {
        console.log("sucess");
      } else {
        console.log("failed");
      }
      router.push(`/${user.id}/dash`);
    } else {
      console.log("not found");
    }
  };

  const register = async (email, password, name) => {};

  const logout = async () => {};

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
