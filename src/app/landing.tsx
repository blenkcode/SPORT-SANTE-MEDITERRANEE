"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./globals.css";
const Landing = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    setTitleVisible(true);
  }, []);
  return (
    <main className="h-lvh min-h-lvh w-full">
      <div className="bg-[url('/bc.jpg')] lg:mt-20 bg-center bg-fixed w-full bg-cover lg:h-3/5 h-3/5 text-sky-50  lg:text-7xl text-3xl items-center justify-center   font-Manrope flex flex-col">
        <div className="mb-10 flex flex-col justify-start items-center font-Manrope">
          <h1
            className={`ease-in-out duration-title transition-all font-extrabold flex lg:flex-row flex-col ${
              titleVisible
                ? "-translate-x-0 opacity-100 blur-none"
                : "-translate-x-56 opacity-0 blur-sm"
            }`}
          >
            <div>SPORT - SANTÉ</div>
            <div className="lg:ml-8">MEDITERRANÉE</div>
          </h1>
          <h2
            className={`ease-in-out duration-title font-extrabold mt-5 transition-all  ${
              titleVisible
                ? "translate-x-0 opacity-100 blur-none"
                : "translate-x-56 opacity-0 blur-sm"
            }`}
          >
            MARSEILLAN
          </h2>
        </div>
        <div
          className={`duration-title transition-all text-lg lg:text-xl ease-in-out delay-500 ${
            titleVisible ? "opacity-100 " : "opacity-0 "
          }`}
        >
          <Link
            href="https://www.doctolib.fr/osteopathe/marseillan/cyril-portal"
            className={` text-sky-50 bg-sky-600 py-2 px-4 rounded-full  transition-all flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50  `}
          >
            PRENDRE RENDEZ-VOUS
            <FontAwesomeIcon className="ml-3 text-xl" icon={faCalendar} />
          </Link>
        </div>
        <div
          className={`duration-title transition-all ease-in-out delay-500 ${
            titleVisible ? "opacity-100 " : "opacity-0 "
          }`}
        >
          <div className="text-xl mt-8 text-sky-50 bg-sky-600 py-2 px-4 rounded-full flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50 transition-colors">
            09 75 96 52 30
            <FontAwesomeIcon className="ml-3 text-xl" icon={faPhone} />
          </div>
        </div>
      </div>

      <div className="   lg:pb-0 h-2/5 lg:h-2/5 bg-sky-50  text-sky-900 px-10 flex flex-col w-full items-center lg:justify-start justify-center ">
        <h2 className="lg:mt-10 text-2xl font-bold lg:font-normal lg:text-5xl mt-0 flex flex-col lg:flex-row items-center justify-center">
          <span className="lg:mr-3 mr-0">Kinésithérapie & </span>Ostéopathie du
          sport
        </h2>
        <ul className="flex flex-col justify-center items-center mt-10 lg:text-2xl text-lg">
          <li className="mb-2">Analyse de course</li>
          <li className="mb-2">Préventions des blessures</li>

          <li className="mb-2">Travail de la mobilité</li>
          <li className="">Préparation à un objectif</li>
        </ul>
        <p className="lg:text-xl text-md lg:mt-10 mt-5 lg:w-3/5"></p>
      </div>
    </main>
  );
};

export default Landing;
