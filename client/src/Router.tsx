import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { LoginPage } from './pages/Login.page';
import { RegisterPage } from './pages/Register.page';
import { ContactsPage } from './pages/Contacts.page';
import { AboutUsPage } from './pages/AboutUs.page';
import { NewsPage } from './pages/News.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
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
]);

export function Router() {
  return <RouterProvider router={router} />;
}
