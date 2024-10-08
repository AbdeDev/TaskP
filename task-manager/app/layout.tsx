"use client";

//import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from 'next-auth/react';


/*export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}