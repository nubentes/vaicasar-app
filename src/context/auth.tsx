import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { DTOCategoria } from '../dtos/categoria';
import { DTOCronograma } from '../dtos/cronograma';
import { DTOLoja } from '../dtos/loja';
import { DTOPessoa } from '../dtos/pessoa';
import { DTOUsuario } from '../dtos/usuario';
import { categoriesData } from '../mock/categorias';
import { storesData } from '../mock/lojas';
import { doLogin, getUser } from '../services/user';

interface ProviderProps {
  children: ReactNode;
}

interface AuthProps {
  user: DTOPessoa;
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
}

const AuthContext = createContext({} as AuthProps);

function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<DTOPessoa>();
  const [list, setList] = useState<DTOCronograma>();
  const [loading, setLoading] = useState<boolean>(true);
  const [stores, setStores] = useState<DTOLoja[]>(storesData);
  const [categories, setCategories] = useState(categoriesData);
  const [filterItem, setFilterItem] = useState(null);
  const key = '@user';

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

      await AsyncStorage.setItem(key, JSON.stringify(userData));
      setUser(userData);

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      setUser({} as DTOPessoa);
      await AsyncStorage.removeItem(key);
    } catch (error) {
      throw new Error(error);
    } finally {
      console.log(user);
    }
  }

  useEffect(() => {
    async function loadUserData() {
      try {
        const value = await AsyncStorage.getItem(key);

        if (value) {
          const userLogged = JSON.parse(value) as DTOPessoa;

          setUser(userLogged);
        }
      } catch (e) {
        throw new Error(e);
      }
    }

    loadUserData();
    console.log(`aqui: ${user?.nome}`);
  }, []);

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
  };
}

export { AuthProvider, useAuth };
