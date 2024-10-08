import requester from "./requester";

const BASE_URL = "http://localhost:3030/users";

export const login = (email: string, password: string): Promise<AuthState> =>
  requester.post(`${BASE_URL}/login`, { email, password });

export const register = (email:string, password:string, firstName: string, lastName: string, username: string): Promise<AuthState> =>
  requester.post(`${BASE_URL}/register`, { email, password, firstName, lastName, username });
