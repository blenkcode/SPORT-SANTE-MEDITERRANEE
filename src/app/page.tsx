"use client";

import Footer from "./footer";

import "./globals.css";
import Presta from "./presta";
import Landing from "./landing";
import Equipe from "./equipe";

import BurgerMenu from "./components/BurgerMenu";
export default function Home() {
  return (
    <div className=" font-Manrope w-full h-lvh z-10  ">
      <BurgerMenu></BurgerMenu>
      <Landing></Landing>
      <Presta></Presta>
      <Equipe></Equipe>

      <Footer></Footer>
    </div>
  );
}
