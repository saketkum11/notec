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
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { token, isAuth } = userData;
  const signup = async ({ email, password, firstName, lastName }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/signin");
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
      console.log(error);
    }
  };
  const logout = () => {
    console.log("click");
    setUserData({ ...userData, token: localStorage.clear(), isAuth: false });
    navigate("/");
  };
  console.log("data from auth context", userData);
  return (
    <AuthContext.Provider
      value={{ signup, login, logout, token, isAuth, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { useAuth, AuthProvider };
