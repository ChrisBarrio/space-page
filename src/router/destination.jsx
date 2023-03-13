import { createBrowserRouter } from 'react-router-dom';

import NotFound from '@/pages/NotFound';

import Mars from '@/pages/destination/Mars';
import Moon from '@/pages/destination/Moon';
import Europa from '@/pages/destination/Europa';
import Titan from '@/pages/destination/Titan';

export const routerDestination = createBrowserRouter([
  {
    path: '/destination/mars',
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Mars />,
      },
      {
        path: '/destination/moon',
        element: <Moon />,
      },
      {
        path: '/destination/europa',
        element: <Europa />,
      },
      {
        path: '/destination/titan',
        element: <Titan />,
      },
    ],
  },
]);
