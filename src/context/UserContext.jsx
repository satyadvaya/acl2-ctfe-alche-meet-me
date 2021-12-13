const { createContext, useState, useContext } = require('react')

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser hook must be called within a Usercontext Provider')
  }

  return context
}

export { UserProvider, useUser }
