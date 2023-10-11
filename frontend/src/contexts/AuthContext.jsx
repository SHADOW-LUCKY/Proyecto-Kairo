import { createContext, useContext, useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../api/User.js";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth should be used within a Provider");
  }
  return context;
};

const checkAuthAndSetState = () => {
  const cookies = Cookies.get();
  return !!cookies.token;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    checkAuthAndSetState()
  );

  const login = useMutation({
    mutationFn: loginRequest,
    onSuccess: () => {
      setIsAuthenticated(true);
    },
    onError: (error) => {
      console.error("Error during login:", error);
    },
  });

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      if (!isAuthenticated) {
        const cookies = Cookies.get();
        if (cookies.token) {
          setIsAuthenticated(true);
        }
      }
    };
    initializeAuth();
  }, [isAuthenticated]);

  const authContextValue = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
