// layout.tsx
import type { Metadata } from "next";
import "@/globals.css";
import dictionary from '@/data/dictionary.json';
import Nav from "@/components/Nav";
import Heading from "@/components/Heading";

import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "PestleHub",
  description: "Build and store your recipe ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Providers>
            <div className="container mx-auto px-3 py-3 md:pt-6 md:pb-6">
              <header className="md:flex">
                <Heading Tag="h1" title={dictionary.meta.title} />
              </header>
              <Nav />
              {children}
            </div>
          </Providers>
      </body>
    </html>
  );
}
