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
      className={`bg-sky-50 font-Straw tracking-widest transition-all duration-500 text-sky-900 2xl:h-20 xl:h-16 lg:h-14   flex lg:pl-8 lg:justify-between justify-evenly items-center fixed top-0 left-0 w-full z-50 lg:-translate-y-0 h-lvh lg:flex-row flex-col ${
        isMenuOpen
          ? "translate-x-0 lg:translate-0"
          : "lg:translate-x-0 translate-x-full"
      }`}
    >
      <div className="flex lg:flex-row flex-col items-center lg:pt-0 pt-5 h-1/5 lg:h-full">
        <img
          src="/logomain.png"
          className="2xl:h-14 xl:h-12 lg:h-10 h-1/2 lg:mr-8"
        ></img>
        <div className="2xl:text-lg xl:text-md lg:text-xs  font-Play mt-10 lg:mt-0 font-bold">
          Sport - Santé Mediterranée{" "}
        </div>
      </div>
      <div className="flex lg:justify-between justify-start lg:flex-row flex-col items-center w-fit lg:h-full h-2/3  font-semibold">
        <div className="duration-title transition-all flex items-center justify-center ease-in-out delay-500 ">
          <Link
            href="https://www.doctolib.fr/osteopathe/marseillan/cyril-portal"
            className={` text-sky-50 bg-sky-600 py-2 px-4 rounded-full w-fit transition-all 2xl:text-md  lg:text-sm  flex font-thin justify-center items-center cursor-pointer  hover:bg-sky-50 hover:border-sky-600 hover:text-sky-600 border-solid border-2 border-sky-600 `}
          >
            Rendez-vous en ligne
          </Link>
        </div>
        <Link
          className="px-8 flex justify-center  relative items-center  2xl:text-md lg:text-sm  h-20 lg:h-full w-fit transition-all"
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
        <Link
          className="px-8 flex justify-center  relative items-center  2xl:text-md lg:text-sm h-20 lg:h-full w-fit  transition-all"
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
        {/* Dropdown for KINESITHERAPIE */}
        <div
          className={`px-6 relative flex items-center 2xl:text-md lg:text-sm h-20 lg:h-full  w-fit justify-center transition-all`}
        >
          <div
            onMouseEnter={handleMouseEnter}
            className="lg:flex items-center w-fit h-full cursor-pointer opacity-0 lg:opacity-100  "
          >
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
            onMouseLeave={handleMouseLeave}
            className={`absolute transition-all lg:text-sky-50 text-sky-900 w-full duration-500 bg-sky-700 py-5 left-0  lg:mt-72 mt-40 2xl:-translate-y-5 xl:-translate-y-7 lg:-translate-y-8 lg:bg-opacity-50 bg-opacity-0  2xl:text-md  lg:text-xs flex flex-col h-fit justify-between rounded-b-lg z-10 border-sky-100 lg:${
              dropdownOpen ? "opacity-100 " : "opacity-0 "
            } ${
              isMenuOpen ? "opacity-100 lg:opacity-0" : "opacity-0 lg:opacity-0"
            }`}
          >
            <Link
              className="px-8 py-2 lg:hover:bg-sky-900 lg:hover:text-sky-100"
              href="/kinesitherapie"
            >
              KINESITHERAPIE
            </Link>
            <Link
              className="px-8 py-2 lg:hover:bg-sky-900 lg:hover:text-sky-100"
              href="/osteopathie"
            >
              OSTEOPATHIE
            </Link>
            <Link
              className="px-8 py-2 lg:hover:bg-sky-900 lg:hover:text-sky-100"
              href="/bikefiting"
            >
              BIKE FITTING
            </Link>
            <Link
              className="px-8 py-2 lg:hover:bg-sky-900 lg:hover:text-sky-100"
              href="/massage"
            >
              MASSAGE
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
