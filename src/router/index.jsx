import { createBrowserRouter } from 'react-router-dom';

import NotFound from '@/pages/NotFound';

import Home from '@/pages/Home';
import Destination from '@/pages/Destination';
import Crew from '@/pages/Crew';
import Technology from '@/pages/Technology';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/destination',
        element: <Destination />,
      },
      {
        path: '/crew',
        element: <Crew />,
      },
      {
        path: '/technology',
        element: <Technology />,
      },
    ],
  },
]);
