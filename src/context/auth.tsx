import React, { createContext, useState, useContext, ReactNode } from 'react';
import { DTOUsuario } from '../dtos/usuario';

interface ProviderProps {
  children: ReactNode;
}

interface AuthProps {
  user: DTOUsuario;
  setUser: React.Dispatch<React.SetStateAction<DTOUsuario>>;
}

const AuthContext = createContext({} as AuthProps);

function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<DTOUsuario>();

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
