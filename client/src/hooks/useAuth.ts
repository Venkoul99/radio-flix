import { useContext } from "react";
import { login, register } from "../api/auth-api";


export const useLogin = () => {
  const loginHandler = async (email:string, password:string) => {
    const result = await login(email, password);
    console.log(result);
  };

  return loginHandler;
};


