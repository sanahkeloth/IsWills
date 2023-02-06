import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Create from './pages/Create';
import Home from './pages/Home';
import RootLayout from './components/RootLayout';
import { chakra } from '@chakra-ui/react';
// import { GlobalProvider } from './utils/GlobalContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<RootLayout />}>
      <Route
        index
        element={<Home />}
      />
      <Route
        path='create'
        element={<Create />}
      />
      {/* <Route path="profile" element={<Profile />} /> */}
    </Route>
  )
);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
