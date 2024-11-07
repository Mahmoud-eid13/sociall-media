import { createContext, useContext, useState } from "react";
import { accounts } from "../../data";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  // const [error, setError] = useState("");

  const login = (email, password) => {
    const foundUser = accounts.find(
      (account) => account.email === email && account.password === password
    );
    if (foundUser) {
      setAccount(foundUser); // Set the user data on successful login
      return true;
    }
    return false;
  };

  const logout = () => {
    setAccount(null);
    window.location.assign("http://localhost:3000/");
  };

  return (
    <AuthContext.Provider value={{ account, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
