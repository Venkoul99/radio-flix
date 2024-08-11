interface AuthState {
    email?: string;
    accessToken?: string;
    isAuthenticated?: boolean
    changeAuthState: (newState: Partial<AuthState>) => void;

}