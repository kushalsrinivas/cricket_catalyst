import { createContext, useState, ReactNode } from "react";
import { data } from "./data";
import { useRouter } from "next/router";

type User = {
  id: number;
  mail: string;
  pwd: string;
};

type StoreContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, name: string) => void;
  logout: () => void;
  finduser: (userid: Number) => void;
};

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined
);

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    const user = data.users.find((user) => user.mail === email);
    if (user) {
      if (user.pwd === password) {
        console.log("success");
      } else {
        console.log("failed");
      }
      router.push(`/${user.id}/Dash`);
    } else {
      console.log("not found");
    }
  };

  const register = async (email: string, password: string, name: string) => {
    // Implement the registration logic here
  };

  const logout = async () => {
    // Implement the logout logic here
  };
  const finduser = (userid: Number) => {
    const user = data.users.find((user) => user.id === userid);
    return user;
  };

  const context: StoreContextType = {
    user: loggedInUser,
    loading,
    login,
    register,
    logout,
    finduser,
  };

  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  );
};
