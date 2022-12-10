import React, { createContext, useState, useContext, ReactNode } from 'react';
import { DTOPessoa } from '../dtos/pessoa';
import { DTOUsuario } from '../dtos/usuario';
import { personData } from '../mock/pessoa';

interface ProviderProps {
  children: ReactNode;
}

interface AuthProps {
  user: DTOPessoa;
  // user: DTOUsuario;
  setUser: React.Dispatch<React.SetStateAction<DTOUsuario>>;
}

const AuthContext = createContext({} as AuthProps);

function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<DTOPessoa>();

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
