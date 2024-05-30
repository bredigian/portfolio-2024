import './index.css';

import App from '@/App.tsx';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Toaster />
    <App />
    <Footer />
  </React.StrictMode>,
);
