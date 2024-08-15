import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { LoginPage } from './pages/Login.page';
import { RegisterPage } from './pages/Register.page';
import { ContactsPage } from './pages/Contacts.page';
import { AboutUsPage } from './pages/AboutUs.page';
import { NewsPage } from './pages/News.page';
import { NewsItemDetailsPage } from './pages/news/NewsItemDetails';
import { CreateNewsPage } from './pages/CreateNews.page';
import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { EditNewsPage } from './pages/EditNews.page';

export function AuthHandler(props: { children?: React.ReactNode }) {
  const authState = useContext(AuthContext);

  if (authState.isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export function LoggedHandler(props: { children?: React.ReactNode }) {
  const authState = useContext(AuthContext);

  if (!authState.isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    element: <LoggedHandler />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/contacts',
    element: <ContactsPage />,
  },
  {
    path: '/about-us',
    element: <AboutUsPage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
  {
    path: 'news/:newsId/details',
    element: <NewsItemDetailsPage />,
  },
  {
    element: <AuthHandler />,
    children: [
      {
        path: '/create-news',
        element: <CreateNewsPage />,
      },
      {
        path: '/news/:newsId/edit',
        element: <EditNewsPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
