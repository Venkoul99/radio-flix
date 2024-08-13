import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { AuthContext } from './contexts/AuthContext';
import { useState } from 'react';

interface AuthStateData extends Pick<AuthState, 'email' | 'accessToken' | 'isAuthenticated'> {}

export default function App() {
  const savedState = localStorage.getItem('__state');
  const [authState, setAuthState] = useState<AuthStateData>(
    savedState ? JSON.parse(savedState) : { email: '', accessToken: '', isAuthenticated: false }
  );

  const changeAuthState = (newState: Partial<AuthStateData>) => {
    const mergedState = { ...authState, ...newState };

    setAuthState(mergedState);
    localStorage.setItem('__state', JSON.stringify(mergedState));
  };

  const contextData: AuthState = {
    ...authState,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </AuthContext.Provider>
  );
}
