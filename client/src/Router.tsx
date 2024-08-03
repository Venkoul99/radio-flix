import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { LoginPage } from './pages/Login.page';
import { RegisterPage } from './pages/Register.page';
import { ContactsPage } from './pages/Contacts.page';
import { AboutUsPage } from './pages/AboutUs.page';
import { NewsPage } from './pages/News.page';
import { NewsItemDetailsPage } from './pages/news/NewsItemDetails';

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
  {
    path: '/news/newsitemdetails',
    element: <NewsItemDetailsPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
