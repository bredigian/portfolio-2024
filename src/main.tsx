import './index.css';

import App from '@/App.tsx';
import Navbar from '@/components/navbar.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Toaster />
    <App />
  </React.StrictMode>,
);
