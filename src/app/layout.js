"use client"

import { Provider } from 'react-redux';
import store from '../store';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';


const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Diatomic Soft",
//   description: "Trasted software company",
// };

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store} >
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
