"use client";
import "./globals.css";
import Presta from "./presta";
import Landing from "./landing";
import Equipe from "./equipe";

export default function Home() {
  return (
    <div className=" font-Manrope w-full h-lvh z-10  ">
      <Landing></Landing>
      <Presta></Presta>
      <Equipe></Equipe>
    </div>
  );
}
