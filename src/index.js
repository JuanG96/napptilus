import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import ItemDetails from './Pages/ItemDetails';
import Main from './Pages/Main';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "item/:itemId",
    element: <ItemDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
