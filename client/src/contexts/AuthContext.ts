import { createContext } from "react";

export const AuthContext = createContext<AuthState>({
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: () => {},
    logout: () => {},
});