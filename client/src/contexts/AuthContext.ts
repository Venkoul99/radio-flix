import { createContext } from "react";

export const AuthContext = createContext<AuthState>({
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: () => {},
});