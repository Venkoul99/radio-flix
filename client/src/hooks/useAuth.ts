import { useContext } from "react";
import { login, register } from "../api/auth-api";
import { AuthContext } from "@/contexts/AuthContext";


export const useLogin = () => {
  const {changeAuthState} = useContext(AuthContext);
  const loginHandler = async (email:string, password:string) => {
    const result = await login(email, password);

    changeAuthState(result);
  };

  return loginHandler;
};

export const useRegister = () => {
  const {changeAuthState} = useContext(AuthContext);
  const registerHandler = async (email:string, password:string) => {
    const result = await register(email, password);
    
    changeAuthState(result);
  };

  return registerHandler;
};
