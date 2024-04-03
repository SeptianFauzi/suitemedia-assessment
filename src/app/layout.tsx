import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monito - Your Pet's Best Friend",
  description:
    "Find your perfect pet at Monito. We offer a wide range of pets, products, and valuable pet knowledge to enrich your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/svn-gilroy"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
