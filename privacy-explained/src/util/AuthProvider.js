import { auth } from "@/firebase/firebase";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // set the user when they sign in
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthProvider.provider value={{ user }}>{children}</AuthProvider.provider>
  );
};
