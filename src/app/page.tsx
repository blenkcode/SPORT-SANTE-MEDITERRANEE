"use client";
import "./globals.css";
import Presta from "./presta";
import Landing from "./landing";
import Equipe from "./equipe";

export default function Home() {
  return (
    <div className=" font-Manrope w-full h-auto z-10 overflow-hidden ">
      <Landing></Landing>
      <Presta></Presta>
      <Equipe></Equipe>
    </div>
  );
}
