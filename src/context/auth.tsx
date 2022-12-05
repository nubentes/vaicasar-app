import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthProps {
  children: ReactNode;
}

export interface User {
  user: {
    nome: string;
    data: string;
  };
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext({} as User);

function AuthProvider({ children }: AuthProps) {
  const [user, setUser] = useState<User>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  const { user, setUser } = context;

  return { user, setUser };
}

export { AuthProvider, useAuth };
