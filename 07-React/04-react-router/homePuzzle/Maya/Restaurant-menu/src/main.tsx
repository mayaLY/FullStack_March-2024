import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.tsx";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);