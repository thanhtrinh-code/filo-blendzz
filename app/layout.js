import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./NavBar";
import Footer from "./Footer";


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

export const metadata = {
  title: "Filo Blendzz",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fff8f3] w-screen h-svh`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
