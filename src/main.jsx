// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from "./Components/SignUp";
import Login from './Components/Login.jsx';
import Browse from './Components/Browse.jsx';
import UserContextProvider from './Context/UserContextProvider.jsx';
import { Provider } from 'react-redux';
import netflixStore from './store/Redux_store.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
  { path: '/browse', element: <Browse /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={netflixStore}>
      <UserContextProvider>
        <RouterProvider router={appRouter} />
      </UserContextProvider>
   </Provider>
  </StrictMode>
);
