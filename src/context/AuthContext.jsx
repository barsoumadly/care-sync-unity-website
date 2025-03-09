import { createContext, useContext, useReducer } from "react";

const userContext = createContext();

const initialState = {
  user: null,
  userEmail: null,
  isAuthenticated: false,
  isProfileCompleted: null,
  isRegistered: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "register": {
      return {
        ...state,
        user: action.payload,
        isRegistered: true,
      };
    }
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isProfileCompleted: action.payload.profileCompleted,
      };
    case "saveEmail":
      return { ...state, userEmail: action.payload, isRegistered: true };
    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
  }
}

function UserContextProvider({ children }) {
  const [
    { user, userEmail, isAuthenticated, isRegistered, isProfileCompleted },
    dispatch,
  ] = useReducer(reducer, initialState);
  function userLogin(user, token) {
    dispatch({ type: "login", payload: user });
    localStorage.setItem("key", JSON.stringify(token));
  }
  function userRegister(user) {
    dispatch({ type: "register", payload: user });
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
        userRegister,
        userLogin,
        userEmail,
        saveEmail,
        userLogout,
        isAuthenticated,
        isRegistered,
        isProfileCompleted,
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
