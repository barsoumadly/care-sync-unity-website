import { createContext, useContext, useReducer, useState } from "react";

const userContext = createContext();

const initialState = {
  user: null,
  userEmail: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "resetPass":
      return { ...state, userEmail: action.type };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
  }
}

function UserContextProvider({ children }) {
  const [{ user, userEmail, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [user, setUser] = useState(null);
  // const [userEmail, setUserEmail] = useState(null);
  function userLogin(user) {
    dispatch({ type: "login", payload: user });
  }

  function userLogout() {
    dispatch({ type: "logout" });
  }

  function resetPassword(email) {
    dispatch({ type: "resetPass", payload: email });
  }

  return (
    <userContext.Provider
      value={{
        user,
        userLogin,
        userEmail,
        resetPassword,
        userLogout,
        isAuthenticated,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

function useAuth() {
  const context = useContext(userContext);

  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");

  return context;
}

export { UserContextProvider, useAuth };
