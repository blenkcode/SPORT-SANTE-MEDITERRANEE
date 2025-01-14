import type { Metadata } from "next";
import ClientProvider from "../app/ClientProvider"; // Importer ClientProvider
import Header from "./header";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import BurgerMenu from "./components/BurgerMenu";

config.autoAddCss = false;

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
  title: "Sport-Santé Méditerranée",
  description: "Kinésithérapie & Ostéopathie à Marseillan",
  verification: {
    google: "JhcDQRNOafCoiUJZyyKzTng8ZcVU4v7Dxdb7-dIvdAI",
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "icon",
      url: "/logokinemedwhite.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "/logokinemedwhite.png",
      type: "image/png",
      sizes: "16x16",
    },
    { rel: "apple-touch-icon", url: "/logokinemedwhite.png", sizes: "180x180" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ClientProvider>
          {" "}
          <Header></Header>
          <BurgerMenu></BurgerMenu>
          {children}
          <Footer></Footer>
        </ClientProvider>
      </body>
    </html>
  );
}
