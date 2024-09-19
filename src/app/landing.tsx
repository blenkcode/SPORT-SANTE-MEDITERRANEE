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

  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  console.log(scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="lg:h-lvh h-auto min-h-lvh w-full">
      <div className="bg-[url('/bc.jpg')] bg-center lg:bg-fixed bg-scroll w-full bg-cover lg:h-3/5 h-lvh text-sky-50 lg:text-4xl text-2xl">
        <div className="w-full h-full items-center justify-center font-Manrope flex flex-col bg-gradient-to-r from-sky-700/80 to-sky-700/0">
          <div className="items-center flex  flex-col justify-center">
            <img
              src="/logomain.png"
              className="rounded-full lg:w-0 w-2/5 mb-10"
            ></img>
            <div className="mb-10 lg:mt-10 mt-0 flex flex-col justify-start items-center font-Manrope">
              <h1
                className={`ease-in-out duration-title transition-all font-extrabold flex lg:flex-row flex-col ${
                  titleVisible
                    ? "-translate-x-0 opacity-100 blur-none"
                    : "-translate-x-56 opacity-0 blur-sm"
                }`}
              >
                <div className="bg-zinc-700 bg-opacity-25 px-10 lg:px-5 py-8 rounded-full items-center justify-center flex flex-col lg:flex-row font-Play ">
                  Sport - Santé{" "}
                  <span className="lg:ml-5 mt-10 lg:mt-0 text-sky-200">
                    Mediterranée
                  </span>
                </div>
              </h1>
              {/* <h2
                className={`ease-in-out duration-title bg-zinc-700 bg-opacity-25 px-5 py-2 rounded-full font-extrabold mt-5 transition-all  ${
                  titleVisible
                    ? "translate-x-0 opacity-100 blur-none"
                    : "translate-x-56 opacity-0 blur-sm"
                }`}
              >
                MARSEILLAN
              </h2> */}
            </div>
            <div
              className={`duration-title transition-all flex items-center justify-center text-lg lg:text-xl ease-in-out delay-500 ${
                titleVisible ? "opacity-100 " : "opacity-0 "
              }`}
            >
              <Link
                href="https://www.doctolib.fr/osteopathe/marseillan/cyril-portal"
                className={` text-sky-50 bg-sky-600 py-2 px-4 rounded-full w-fit transition-all flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50  `}
              >
                PRENDRE RENDEZ-VOUS
                <FontAwesomeIcon className="ml-3 text-xl" icon={faCalendar} />
              </Link>
            </div>
            <div
              className={`duration-title flex items-center justify-center transition-all ease-in-out delay-500 ${
                titleVisible ? "opacity-100 " : "opacity-0 "
              }`}
            >
              <div className="text-xl mt-8 text-sky-50 bg-sky-600 py-2 px-4 rounded-full flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50 w-fit transition-colors">
                09 75 96 52 30
                <FontAwesomeIcon className="ml-3 text-xl" icon={faPhone} />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="   lg:pb-0 h-fit lg:h-2/5 bg-sky-50  text-sky-900 lg:px-10 px-5  flex flex-col w-full items-center  lg:justify-center justify-start py-6 lg:py-0 relative overflow-x-hidden ">
        <h2 className="lg:mt-10 text-2xl font-extrabold lg:font-normal lg:text-3xl mt-0 flex flex-col lg:flex-row items-center justify-center ">
          <span className="lg:mr-3 mr-0">Kinésithérapie & </span>Ostéopathie du
          sport
        </h2>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:pb-0 pb-8 ">
          <div className="lg:text-md xl:w-1/2 2xl:w-1/3 text-md lg:mt-5 mt-10">
            {" "}
            Situé au 67 Avenue de la Méditerranée à Marseillan Plage, nous vous
            accueillions dans un cadre propice au bien-être. Notre équipe
            pluridisciplinaire place le mouvement au centre de chaque approche
            thérapeutique, convaincue que l’activité physique, adaptée à chacun,
            est la clé de la guérison et de la prévention. Nos traitements
            personnalisés, visent à restaurer et améliorer la mobilité, afin
            d&apos;atteindre vos objectifs de santé et de bien-être durable.
          </div>
          <div className="lg:w-1/3 w-1/2 flex items-center justify-center ">
            {" "}
            <img
              src="/logocourse.png"
              className={`w-56 mt-10 rounded-full border-2 border-solid border-sky-900  transition-all duration-1000 ${
                isVisible
                  ? "-translate-x-0 opacity-100 rotate-0"
                  : "-translate-x-full opacity-0 rotate-180 lg:-translate-x-0 lg:opacity-100 lg:rotate-0"
              }`}
            ></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
