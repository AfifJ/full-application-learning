import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store.js';

import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomeScreen from './screens/HomeScreen.jsx';
import Register from './screens/Register.jsx';
import Login from './screens/Login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
