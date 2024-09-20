"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import "./globals.css";
const Equipe = () => {
  return (
    <div className="w-full">
      <div className="w-full   relative z-30">
        <img src="/bannerocean.gif" className="w-full lg:h-auto h-banner"></img>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-3xl  w-full lg:flex-row flex-col font-bold flex items-center text-sky-900 lg:text-skt-50 justify-center">
          Prenez rendez-vous dès maintenant !{" "}
          <Link
            href="https://www.doctolib.fr/osteopathe/marseillan/cyril-portal"
            className={`lg:text-xl text-md text-sky-50 bg-sky-600 py-2 px-4 rounded-full lg:ml-10 lg:w-80 transition-all flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50 lg:mt-0 mt-10 `}
          >
            Rendez-vous en ligne
            <FontAwesomeIcon className="ml-3 text-xl" icon={faCalendar} />
          </Link>
        </div>
      </div>
      <div className=" h-fit bg-sky-50 text-sky-900 lg:px-10 flex z-20 flex-col w-full items-center justify-center  relative pb-20">
        <h2 className=" lg:mt-20 mt-10 lg:text-3xl font-bold text-xl">
          Notre équipe à votre écoute
        </h2>
        <div className="flex  justify-center lg:flex-row flex-col">
          <div className="mt-10 lg:w-1/3 lg:pr-20 lg:mt-20 flex flex-col justify-evenly">
            <p className="2xl:text-xl xl:text-lg lg:text-md  text-md px-5  2xl:px-12 xl:px-10 lg:px-7 ">
              Notre équipe de soignants, agrée par la clinique du coureur est à
              votre disposition pour vous accompagner dans votre parcours de
              soins.
              <br></br> <br></br>
              Ils mettent leur expertise et leur bienveillance au service de
              votre bien-être.
              <br></br> <br></br>
            </p>
            <div className="w-full flex flex-col items-center justify center ">
              <div className="rounded-xl pb-8  bg-zinc-300 bg-opacity-20 w-fit px-10 flex flex-col items-center justify center">
                <span className="xl:text-3xl lg:text-2xl mb-8 mt-8 font-extrabold">
                  Nos Valeurs
                </span>
                <ul className="flex flex-col items-center 2xl:text-2xl xl:text-xl lg:text-lg  text-xl justify center ">
                  <li className="mb-3">Qualité du soin</li>
                  <li className="mb-3">Prévention</li>
                  <li className="mb-3">Respect de l’Humain </li>
                  <li>Convivialité</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:mt-20 mt-10 lg:grid-cols-2 xl:gap-20 gap-10 z-20 justify-items-center ">
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64 overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                src="/laureen.png"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-sky-900 text-3xl  absolute z-30 bottom-5 left-5">
                Laureen Pépin
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64 overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                src="/cyril.png"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-sky-200 text-3xl  absolute z-30 bottom-5 right-5">
                Cyril Portal
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64  overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                src="/mart.png"
                className=" grayscale hover:scale-110 w-full transition-all duration-300 "
              ></img>
              <div className="text-sky-900 text-3xl  absolute z-30 bottom-5 left-5">
                Martin Larivière
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64   overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                src="/autre.png"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-sky-900 text-3xl  absolute z-30 bottom-5 left-5">
                Ewen Gbick
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipe;
