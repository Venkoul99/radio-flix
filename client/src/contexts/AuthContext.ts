import { createContext } from "react";

export const AuthContext = createContext<AuthState>({
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: () => {},
});