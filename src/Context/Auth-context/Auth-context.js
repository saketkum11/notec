import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    token: localStorage.getItem("token"),
    isAuth: localStorage.getItem("token") ? true : false,
  });
  const navigate = useNavigate();
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

      setUserData({
        ...userData,
        token: response.data.encodedToken,
        isAuth: true,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  const logout = () => {
    setUserData({
      token: localStorage.clear(),
      isAuth: false,
    });
  };
  console.log("from auth-context", userData);
  return (
    <AuthContext.Provider value={{ login, token, isAuth, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth };
