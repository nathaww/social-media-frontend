import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/Layout/NavBar";
import Footer from "@/components/Layout/Footer";
import SideBar from "@/components/Layout/SideBar";
import { ReduxProvider } from "@/redux/provider";
import Wrapper from "@/components/Layout/Wrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Knitworks",
  description: "Social Media project with Nextjs + Tailwind + GraphQl + Relay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <ReduxProvider>
          <SideBar />
          <Wrapper>
            <NavBar />
            {children}
            <Footer />
          </Wrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
