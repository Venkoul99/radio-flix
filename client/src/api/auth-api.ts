import requester from "./requester";

const BASE_URL = "http://localhost:3030/users";

export const login = (email: string, password: string) =>
  requester.post(`${BASE_URL}/login`, { email, password });

export const register = (email: string, password:string) =>
  requester.post(`${BASE_URL}/register`, { email, password });
