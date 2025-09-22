import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('@/components/navbar/navbar'))
const Footer = dynamic(() => import('@/components/footer'))

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cartolink landing page",
  description: "A simple Landing page for Cartolink assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
