"use client";

import Footer from "./footer";

import "./globals.css";
import Presta from "./presta";
import Landing from "./landing";
import Equipe from "./equipe";
import Header from "./header";
export default function Home() {
  return (
    <div className=" font-Manrope w-full h-lvh z-10  ">
      <Header></Header>
      <Landing></Landing>
      <Presta></Presta>
      <Equipe></Equipe>

      <Footer></Footer>
    </div>
  );
}
