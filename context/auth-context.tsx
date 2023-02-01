import React, { useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email?: string) => {},
});

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    signOut();
    router.push("/");
  };

  const handleLogIn = (email?: string) => {
    setIsLoggedIn(true);
    router.push("/");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: handleLogOut,
        onLogin: handleLogIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
