import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "~/components/header";

export const metadata: Metadata = {
  title: "iloveportfolio",
  description: "Generate resume pdf to portfolio website.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="flex min-h-dvh flex-col items-center justify-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
