import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';
import DeleteAccountPage from './DeleteAccountPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@fontsource/montserrat'; // Defaults to weight 400.
import '@fontsource/montserrat/400.css'; // Weight 400 with normal style.
import '@fontsource/montserrat/700.css'; // Weight 700 with normal style.


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/delete-account",
    element: <DeleteAccountPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
