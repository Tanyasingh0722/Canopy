import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  // triggers hmr
  return <RouterProvider router={router} />;
}