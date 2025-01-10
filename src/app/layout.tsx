import type { Metadata } from "next";
import "./globals.css";
import { SearchProvider } from "@/context/SearchContext";
import Navbar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "PinApp Challenge",
  description: "Challenge enero para pinapp",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/public/pinapp.ico" />
      </head>
      <body>
        <SearchProvider>
            <Navbar />
            {children}
            <footer className="bottom-0 my-8 w-full flex justify-center text-gray-400 text-base">
              PinApp © - January 2025 Challenge for PinApp
            </footer>
        </SearchProvider>
      </body>
    </html>
  );
}
