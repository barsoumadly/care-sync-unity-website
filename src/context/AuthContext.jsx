import { createContext, useContext, useReducer } from "react";

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
    case "saveEmail":
      return { ...state, userEmail: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
  }
}

function UserContextProvider({ children }) {
  const [{ user, userEmail, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function userLogin(user) {
    dispatch({ type: "login", payload: user });
    localStorage.setItem("key", JSON.stringify(user));
  }
  function saveEmail(userEmail) {
    dispatch({ type: "saveEmail", payload: userEmail });
  }

  function userLogout() {
    dispatch({ type: "logout" });
    localStorage.removeItem("key");
  }

  return (
    <userContext.Provider
      value={{
        user,
        userLogin,
        userEmail,
        saveEmail,
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
