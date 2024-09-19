"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Header() {
  const isMenuOpen = useSelector((state: RootState) => state.ui.navbar);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [acceuilHover, setAcceuilHover] = useState(false);
  const [contactlHover, setContactHover] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header
      className={`bg-sky-50 font-Manrope tracking-widest transition-all duration-500 text-sky-900 lg:h-20 flex lg:pl-8 lg:justify-between justify-evenly items-center fixed top-0 left-0 w-full z-50 lg:-translate-y-0 h-lvh lg:flex-row flex-col ${
        isMenuOpen
          ? "translate-x-0 lg:translate-0"
          : "lg:translate-x-0 translate-x-full"
      }`}
    >
      <div className="flex lg:flex-row flex-col items-center lg:pt-0 pt-5 h-1/5 lg:h-full">
        <img src="/logomain.png" className="lg:h-14 h-1/2 lg:mr-8"></img>
        <div className="text-md font-Play mt-10 lg:mt-0 font-bold">
          Sport - Santé Mediterranée{" "}
        </div>
      </div>
      <div className="flex lg:justify-between justify-start lg:flex-row flex-col items-center w-fit lg:h-full h-2/3  font-semibold">
        <Link
          className="px-8 flex justify-center  relative items-center  lg:text-sm text-2xl h-20 lg:h-full w-fit transition-all"
          href="/"
          onMouseEnter={() => setAcceuilHover(true)}
          onMouseLeave={() => setAcceuilHover(false)}
        >
          ACCUEIL
          <div
            className={`h-0.5  transtion-all- duration-500 absolute bottom-0 bg-sky-900 ${
              acceuilHover ? "opacity-100 w-full" : "opacity-0 w-0"
            }`}
          ></div>
        </Link>

        {/* Dropdown for KINESITHERAPIE */}
        <div
          className={`px-6 relative flex items-center lg:text-sm text-2xl h-20 lg:h-full  w-fit justify-center transition-all`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center w-fit cursor-pointer opacity-0 lg:opacity-100">
            PRESTATIONS
            <FontAwesomeIcon
              icon={faNotesMedical}
              className="ml-2 -translate-y-0.5"
            />
          </div>
          <div
            className={`h-0.5  transtion-all- duration-500 absolute bottom-0 bg-sky-900 ${
              dropdownOpen
                ? "lg:opacity-100 lg:w-full opacity-0"
                : "lg:opacity-0 w-0 "
            }`}
          ></div>

          {/* Dropdown Menu */}
          <div
            className={`absolute transition-all lg:text-sky-50 text-sky-900 w-full duration-500 bg-sky-700 py-5 left-0  mt-72 -translate-y-3 lg:bg-opacity-50 bg-opacity-0  lg:text-sm text-2xl flex flex-col h-fit justify-between rounded-b-lg z-10 border-sky-100 lg:${
              dropdownOpen ? "opacity-100 " : "opacity-0 "
            } ${
              isMenuOpen ? "opacity-100 lg:opacity-0" : "opacity-0 lg:opacity-0"
            }`}
          >
            <Link
              className="px-8 py-2 lg:hover:bg-sky-900 lg:hover:text-sky-100"
              href="/Kinesitherapie"
            >
              KINESITHERAPIE
            </Link>
            <Link
              className="px-8 py-2 lg:hover:bg-sky-900 lg:hover:text-sky-100"
              href="/Osteopathie"
            >
              OSTEOPATHIE
            </Link>
            <Link
              className="px-8 py-2 lg:hover:bg-sky-900 lg:hover:text-sky-100"
              href="/BikeFitting"
            >
              BIKE FITTING
            </Link>
            <Link
              className="px-8 py-2 lg:hover:bg-sky-900 lg:hover:text-sky-100"
              href="/Massage"
            >
              MASSAGE
            </Link>
          </div>
        </div>
        <Link
          className="px-8 flex justify-center lg:text-sm text-2xl relative items-center   h-20 lg:h-full  w-fit transition-all lg:mt-0 mt-96"
          href="/"
          onMouseEnter={() => setContactHover(true)}
          onMouseLeave={() => setContactHover(false)}
        >
          CONTACT
          <div
            className={`h-0.5 transtion-all duration-500 absolute bottom-0 bg-sky-900 ${
              contactlHover ? "opacity-100 w-full" : "opacity-0 w-0"
            } `}
          ></div>
        </Link>
      </div>
    </header>
  );
}
