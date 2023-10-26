import { createContext, useContext } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ name: "exemplo1", email: "exemplo@email.com" }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }