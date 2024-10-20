// src/app/pages/layout.tsx

import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Choose IT Helper",
  description: "This is you tool for choose IT technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
