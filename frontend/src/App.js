import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPath from './pages/MainPath';
import DirectDetails from './pages/DirectDetails';

const router = createBrowserRouter([
  {path: '/', element: <MainPath />, errorElement: <MainPath />},
  {path: '/:type/:id/', element: <DirectDetails />}
]);

const App = () => {

  return <RouterProvider router={router} />

}

export default App;
