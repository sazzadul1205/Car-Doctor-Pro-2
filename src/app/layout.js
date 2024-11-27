import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";

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
  title: "Car Doctor Pro",
  description: "Car Maintenance Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className=" bg-white">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
