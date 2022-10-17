import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true)
  const [username, setUsername] = useState('')

  const login = (name, password) => {
    if (password === '123') {
      setIsAuth(true)
      setUsername(name)
      return
    }
    alert('Invalid password')
  }
 
  const logout = () => {
    setIsAuth(false)
  }

  return (
    <AuthContext.Provider value={{ isAuth, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

