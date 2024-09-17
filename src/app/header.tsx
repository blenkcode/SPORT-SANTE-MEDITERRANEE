"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
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
    <header className="bg-sky-700 font-Manrope tracking-widest text-sky-50 h-16 flex px-16 justify-end fixed top-0 left-0 w-full ">
      <div className="flex justify-between items-center w-fit text-md font-semibold">
        <Link
          className="px-8 flex justify-center  relative items-center   h-full w-fit transition-all"
          href="/"
          onMouseEnter={() => setAcceuilHover(true)}
          onMouseLeave={() => setAcceuilHover(false)}
        >
          ACCUEIL
          <div
            className={`h-0.5 w-full transtion-all- duration-500 absolute bottom-0 bg-sky-50 ${
              acceuilHover ? "opacity-100 w-full" : "opacity-0 w-0"
            }`}
          ></div>
        </Link>

        <div
          className={`px-8 relative flex items-center h-full w-full  justify-center   ${
            dropdownOpen ? "h-fit " : "h-16 overflow-hidden"
          }
          `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`h-0.5 w-full transtion-all- duration-500 absolute bottom-0 bg-sky-50 ${
              dropdownOpen ? "opacity-100 w-full" : "opacity-0 w-0"
            }`}
          ></div>
          {/* Bouton PRESTATIONS */}
          <div className="flex items-center w-full cursor-pointer transition-all ">
            PRESTATIONS
            <FontAwesomeIcon
              icon={faNotesMedical}
              className="ml-2 -translate-y-0.5 "
            />
          </div>

          <div
            className={`absolute transition-all text-sky-50 duration-400 bg-sky-700 py-5 left-0 mt-72 -translate-y-3 flex flex-col h-fit justify-between rounded-b-lg z-10 border-sky-100
            ${dropdownOpen ? "opacity-100 " : "opacity-0 "}
            `}
          >
            <Link
              className="px-8 py-2 hover:bg-sky-900 hover:text-sky-100 "
              href="/Kinesitherapie"
            >
              KINESITHERAPIE
            </Link>
            <Link
              className="px-8 py-2 hover:bg-sky-900  hover:text-sky-100 "
              href="/Osteopathie"
            >
              OSTEOPATHIE
            </Link>
            <Link
              className="px-8 py-2 hover:bg-sky-900  hover:text-sky-100 "
              href="/BikeFitting"
            >
              BIKE FITTING
            </Link>
            <Link
              className="px-8 py-2 hover:bg-sky-900  hover:text-sky-100 "
              href="/Massage"
            >
              MASSAGE
            </Link>
          </div>
        </div>

        <Link
          className="px-6 flex justify-center relative items-center   h-full w-fit transition-all"
          href="/Contact"
          onMouseEnter={() => setContactHover(true)}
          onMouseLeave={() => setContactHover(false)}
        >
          CONTACT
          <FontAwesomeIcon icon={faPhone} className="pl-2 -translate-y-0.5" />
          <div
            className={`h-0.5 w-full transtion-all- duration-500 absolute bottom-0 bg-sky-50 ${
              contactlHover ? "opacity-100 w-full" : "opacity-0 w-0"
            }`}
          ></div>
        </Link>
      </div>
    </header>
  );
}
