'use client'; // Ensures this component is treated as a client-side component

import React from 'react';
import { ReactQueryClientProvider } from '@/providers/queryClient';
import ReduxProvider from '@/providers/ReduxProvider'; // Ensure this path is correct
// import { Toaster } from 'sonner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactQueryClientProvider>
      <ReduxProvider>
        {/* <Toaster position="top-right" richColors /> */}
        <ToastContainer position="top-right"/>
        {children}
      </ReduxProvider>
    </ReactQueryClientProvider>
  );
};

export default ClientProviders;
