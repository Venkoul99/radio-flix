import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { AuthContext } from './contexts/AuthContext';
import { useState } from 'react';

export default function App() {
  const [authState, setAuthState] = useState<AuthState>({
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: () => {},
  });

  const changeAuthState = (newState: Partial<AuthState>) => {
    setAuthState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  const contextData = {
    ...authState,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <MantineProvider theme={theme}>
      <AuthContext.Provider value={contextData}>
        <Router />
      </AuthContext.Provider>
    </MantineProvider>
  );
}
