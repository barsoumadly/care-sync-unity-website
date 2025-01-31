import { createContext, useContext, useState } from "react";

const userContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser, userEmail, setUserEmail }}>
      {children}
    </userContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error("Login error");
  }
  return context;
}

export { UserContextProvider, useUserContext };
