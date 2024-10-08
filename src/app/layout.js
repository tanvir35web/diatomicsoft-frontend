"use client"

import { Provider } from 'react-redux';
import store from '../store';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#0A0A0A', color: 'white' }}>
        <Provider store={store} >
          <Navbar />
          {children}
          <ToastContainer position="bottom-right" />
        </Provider>
      </body>
    </html>
  );
}
