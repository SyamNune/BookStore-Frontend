import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Layout from './Layout';
import Contact from './pages/AdminBookForm';
import FAQ from './pages/FAQ';
import DisplayData from './pages/DisplayData';
import AdminBookForm from './pages/AdminBookForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactus",
        element: <Contact />,
      },
      {
        path: "books",
        element: <DisplayData />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "/admin",
        element: <AdminBookForm />,
      }
    ]
  }
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <RouterProvider router={router} />
      </ClerkProvider>
  </React.StrictMode>,
);
