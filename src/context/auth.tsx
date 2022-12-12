import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { DTOCategoria } from '../dtos/categoria';
import { DTOCronograma } from '../dtos/cronograma';
import { DTOLoja } from '../dtos/loja';
import { DTOUsuario } from '../dtos/usuario';
import { doLogin, getUser } from '../services/user';

interface ProviderProps {
  children: ReactNode;
}

interface AuthProps {
  user: DTOUsuario;
  setUser: React.Dispatch<React.SetStateAction<DTOUsuario>>;
  signIn: (params: DTOUsuario) => Promise<void>;
  signOut: () => Promise<void>;
  list: DTOCronograma;
  setList: React.Dispatch<React.SetStateAction<DTOCronograma>>;
  stores: DTOLoja[];
  setStores: (item) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  filterItem: string;
  setFilterItem: string;
  categories: DTOCategoria[];
  setCategories: (item) => void;
  favorites: DTOLoja[];
  setFavorites: (item) => void;
}

const AuthContext = createContext({} as AuthProps);

function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<DTOUsuario>();
  const [list, setList] = useState<DTOCronograma>();
  const [loading, setLoading] = useState<boolean>(true);
  const [stores, setStores] = useState<DTOLoja[]>();
  const [categories, setCategories] = useState([]);
  const [favorites, setFavorites] = useState<DTOLoja[]>([]);
  const [filterItem, setFilterItem] = useState(null);

  // const key = '@user';

  async function signIn(params: DTOUsuario) {
    try {
      const data: DTOUsuario = await doLogin(params);

      const { id, email, senha, token } = data;

      const person: DTOUsuario = await getUser(data);

      const { nome, telefone } = person;

      const userData = {
        id,
        email,
        senha,
        token,
        nome,
        telefone,
      };

      setUser(userData);

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      setUser({} as DTOUsuario);
      // await AsyncStorage.removeItem(key);
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signOut,
        list,
        setList,
        loading,
        setLoading,
        stores,
        setStores,
        filterItem,
        setFilterItem,
        categories,
        setCategories,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  const {
    user,
    setUser,
    signIn,
    signOut,
    list,
    setList,
    loading,
    setLoading,
    stores,
    setStores,
    filterItem,
    setFilterItem,
    categories,
    setCategories,
    favorites,
    setFavorites,
  } = context;

  return {
    user,
    setUser,
    signIn,
    signOut,
    list,
    setList,
    loading,
    setLoading,
    stores,
    setStores,
    filterItem,
    setFilterItem,
    categories,
    setCategories,
    favorites,
    setFavorites,
  };
}

export { AuthProvider, useAuth };
