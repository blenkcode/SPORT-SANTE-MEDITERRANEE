"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./globals.css";
const Equipe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  console.log(scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      }
      if (window.scrollY > 1950) {
        setIsVisible2(true);
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
    <div className="w-full bg-[url('/covermain.JPG')] bg-center bg-fixed lg:bg-fixed bg-cover">
      <div className="w-full  border-t-4  border-sky-50  font-Straw relative z-34 overflow-hidden h-48  ">
        {/* <img
          src="/bc.jpg"
          className="w-full absolute top-0 lg:h-auto h-banner"
        ></img> */}
        <div className="bg-sky-900 opacity-70 w-full h-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-3xl  w-full lg:flex-row flex-col font-StrawBold flex items-center text-white lg:text-skt-50 justify-center ">
          Prenez rendez-vous dès maintenant !{" "}
          {/* <Link
           
            className={`lg:text-xl text-md text-sky-50 bg-sky-600 py-2 px-4 rounded-full lg:ml-10 lg:w-80 transition-all flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50 lg:mt-0 mt-10 `}
          >
           
          </Link> */}
          <Link href="https://www.doctolib.fr/osteopathe/marseillan/cyril-portal">
            <div className="mt-8  lg:mt-0 text-sky-50 group bg-sky-600 py-2 px-4 rounded-full flex font-thin justify-center  items-center cursor-pointer transition-all hover:bg-sky-50 w-fit relative duration-300 overflow-hidden lg:text-xl text-md  lg:ml-10 lg:w-fit">
              {/* <span className="translate-y-5 absolute -translate-x-10">
                      09 75 96 52 30{" "}
                      <FontAwesomeIcon className="ml-3 " icon={faPhone} />
                    </span> */}
              <span className="hover-group: hover:text-sky-600  opacity-0 translate-">
                Rendez-vous en ligne
                <FontAwesomeIcon className="ml-3 text-xl" icon={faCalendar} />
              </span>
              <span className="transition-all group-hover:text-sky-600 duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
                Rendez-vous en ligne
                <FontAwesomeIcon className="ml-3 text-xl" icon={faCalendar} />
              </span>
              <span className="transition-all group-hover:text-sky-600  duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
                Rendez-vous en ligne
                <FontAwesomeIcon className="ml-3 text-xl" icon={faCalendar} />
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className=" h-fit bg-sky-50 text-sky-900 lg:px-10 flex z-20 flex-col w-full items-center justify-center font-Straw  relative pb-20 pt-5 lg:pt-0">
        {" "}
        <div className="overflow-hidden">
          {" "}
          <h2
            className={`  lg:mt-20 mt-10 bg-sky-900 bg-opacity-60 rounded-full px-5 py-2 lg:text-3xl text-white transition-all duration-500 lg:font-bold text-xl ${
              isVisible ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Le Cabinet
          </h2>
        </div>
        <p className="mt-10 lg:w-2/3 px-10 2xl:text-xl xl:text-lg lg:text-md  text-md px-10  2xl:px-20 xl:px-10 lg:px-7">
          Idéallement situé à 10 minutes de la plage de Marseillan dans
          l'hérault le cabinet de kinésithérapie et ostéopathie vous acceuille
          dans un cadre propice aux soins.
        </p>
        <div className="flex lg:flex-row flex-col items-center justify-center w-full mt-20    ">
          <div className="overflow-hidden lg:w-photo lg:h-photo w-72 h-72   rounded-full border-opacity-70 border-8 border-solid border-sky-900 z-20">
            {" "}
            <img
              alt="cabinet"
              src="/cab1.webp"
              className="w-full translate-y-10 scale-150"
            ></img>
          </div>

          <div className="overflow-hidden mt-10 lg:mt-0 lg:w-96 lg:h-96 w-72 h-72 lg:-translate-x-10 border-opacity-70 rounded-full border-8 border-solid border-sky-900 lg:-translate-y-10 z-10 rounded-full bg-red-50">
            {" "}
            <img
              alt="cabinet"
              src="/cab2.webp"
              className="w-full translate-y-10 scale-150"
            ></img>
          </div>
        </div>
      </div>
      <div className=" h-fit bg-sky-50 text-sky-900 lg:px-10 flex z-20 flex-col w-full items-center justify-center font-Straw  relative pb-20 pt-0 lg:pt-0">
        <div className="overflow-hidden">
          {" "}
          <h2
            className={`  lg:mt-20 mt-10  bg-opacity-60 bg-sky-900 rounded-full px-5 py-2 lg:text-3xl text-white transition-all duration-500 lg:font-bold text-xl ${
              isVisible2 ? "translate-y-0" : "translate-y-10"
            }`}
          >
            Notre équipe à votre écoute{" "}
            <FontAwesomeIcon className="ml-2" icon={faUserNurse} />
          </h2>
        </div>

        <div className="flex  justify-center items-center  flex-col">
          <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row justify-center items-center">
            <div className="rounded-xl pb-8   shadow-2xl bg-opacity-20 w-fit px-10 flex flex-col items-center justify center">
              <span className="xl:text-3xl text-2xl mb-8 mt-8 font-StrawBold">
                Nos Valeurs
              </span>
              <ul className="flex  flex-col items-center 2xl:text-2xl xl:text-xl lg:text-lg  text-xl justify center ">
                <li className="mb-3">Qualité du soin</li>
                <li className="mb-3">Prévention</li>
                <li className="mb-3">Respect de l’Humain </li>
                <li>Convivialité</li>
              </ul>
            </div>

            <p className="2xl:text-xl xl:text-lg lg:text-md  text-md px-10  2xl:px-20 xl:px-10 lg:px-7 lg:w-1/3 lg-pt-0 pt-12">
              Notre équipe de soignants,{" "}
              <span className="font-StrawBold">
                agrée par la clinique du coureur
              </span>{" "}
              est à votre disposition pour vous accompagner dans votre parcours
              de soins.
              <br></br> <br></br>
              Ils mettent leur expertise et leur bienveillance au service de
              <span className="font-StrawBold"> votre bien-être</span> .
              <br></br> <br></br>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-10 gap-10 z-20 justify-items-center w-fit px-10 lg:px-0 ">
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64   overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                src="/laureen.png"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-white bg-zinc-500 w-full text-3xl  absolute z-30 bottom-0 left-0 py-2 px-3 bg-opacity-50 flex items-center justify-center">
                Laureen Pépin
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64 overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                alt="Martin Larivière"
                src="/mart2.webp"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-white bg-zinc-500 w-full text-3xl  absolute z-30 bottom-0 left-0 py-2 px-3 bg-opacity-50 flex items-center justify-center">
                Martin Larivière
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64 overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                alt="Cyril Portal"
                src="/mart.webp"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-white bg-zinc-500 w-full text-3xl  absolute z-30 bottom-0 left-0 py-2 px-3 bg-opacity-50 flex items-center justify-center">
                Cyril Portal
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64 overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                alt="Marcelo Ramirez"
                src="/marcelo.webp"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-white bg-zinc-500 w-full text-3xl  absolute z-30 bottom-0 left-0 py-2 px-3 bg-opacity-50 flex items-center justify-center">
                Marcelo Ramirez
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64 overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                src="/ewe.webp"
                alt="Ewen Gbick"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-white bg-zinc-500 w-full text-3xl  absolute z-30 bottom-0 left-0 py-2 px-3 bg-opacity-50 flex items-center justify-center">
                Ewen Gbick
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64 overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                src="/laureen.png"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-white bg-zinc-500 w-full text-2xl  absolute z-30 bottom-0 left-0 py-2 px-3 bg-opacity-50 flex items-center justify-center">
                Vanessa Amadieu
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipe;
