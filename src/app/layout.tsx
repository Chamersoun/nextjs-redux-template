import { Metadata } from "next";

import React from "react";
import { Toaster } from "react-hot-toast";

import { textFont } from "@/assets/fonts";
import AuthInitializer from "@/lib/authInitializer";
import { Providers } from "@/lib/providers";

import "./globals.scss";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <AuthInitializer>
        <html lang="en">
          <body className={textFont.className} suppressHydrationWarning={true}>
            {children}
            <Toaster />
          </body>
        </html>
      </AuthInitializer>
    </Providers>
  );
}
