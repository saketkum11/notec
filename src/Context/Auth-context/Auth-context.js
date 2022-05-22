import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    token: localStorage.getItem("token"),
    isAuth: localStorage.getItem("token") ? true : false,
  });
  const { token, isAuth } = userData;
  const signup = async ({ email, password, firstName, lastName }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
        lastName,
      });
      console.log("from signup auth", response);
    } catch (error) {
      console.error(error);
    }
  };
  const login = async ({ email, password }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      console.log("from login auth ", response);
      {
        setUserData({
          ...userData,
          token: response.data.encodedToken,
          isAuth: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log("from auth-context", userData);
  return (
    <AuthContext.Provider value={{ login, token, isAuth, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth };
