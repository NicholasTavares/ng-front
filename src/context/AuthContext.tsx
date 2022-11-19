import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TokenProps = {
  token: string;
};

type AppContextProps = {
  auth: TokenProps | null;
  setAuth: Dispatch<SetStateAction<TokenProps | null>>;
  jwt: string | undefined;
  setJwt: Dispatch<SetStateAction<string | undefined>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AppContextProps | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<TokenProps | null>(null);
  const [jwt, setJwt] = useState<string | undefined>(
    localStorage.getItem("jwt") || undefined
  );

  return (
    <AuthContext.Provider value={{ auth, setAuth, jwt, setJwt }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
