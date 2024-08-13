interface AuthState {
    email?: string;
    firstName?: string,
    lastName?: string,
    username?: string,
    accessToken?: string;
    isAuthenticated?: boolean
    changeAuthState: (newState: Partial<AuthState>) => void;
}