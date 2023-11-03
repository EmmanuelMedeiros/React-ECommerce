import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserLogin from './components/user/UserLogin'; 
import UserRegister from './components/user/UserRegister';

import { CommerceProvider } from './components/context/CommerceContext';

// 1 - Configurando as rotas

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfilePage from './components/user/ProfilePage';
import ProfileHeader from './components/user/ProfileHeader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
    {
      path: '/',
      element: <UserLogin/>
    },
    {
      path: '/register',
      element: <UserRegister/>
    },
    {
      path: '/profile',
      element: <ProfileHeader/>
    }
  ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommerceProvider>
      <RouterProvider router = {router}/>
      </CommerceProvider>
  </React.StrictMode>
);
