"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";
const Equipe = () => {
  return (
    <div className="w-full bg-[url('/bc.jpg')] bg-center lg:bg-fixed bg-scroll bg-cover">
      <div className="w-full  border-t-4  border-sky-50  font-Straw relative z-34 overflow-hidden h-48  ">
        {/* <img
          src="/bc.jpg"
          className="w-full absolute top-0 lg:h-auto h-banner"
        ></img> */}
        <div className="bg-sky-900 opacity-70 w-full h-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-3xl  w-full lg:flex-row flex-col font-bold flex items-center text-white lg:text-skt-50 justify-center ">
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
      <div className=" h-fit bg-sky-50 text-sky-900 lg:px-10 flex z-20 flex-col w-full items-center justify-center font-Straw  relative pb-20">
        <h2 className=" lg:mt-20 mt-10 lg:text-3xl font-bold text-xl">
          Notre équipe à votre écoute{" "}
          <FontAwesomeIcon className="ml-5" icon={faUserNurse} />
        </h2>
        <div className="flex  justify-center items-center  flex-col">
          <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row justify-center items-center">
            <div className="rounded-xl pb-8  bg-zinc-300 bg-opacity-20 w-fit px-10 flex flex-col items-center justify center">
              <span className="xl:text-3xl text-2xl mb-8 mt-8 font-extrabold">
                Nos Valeurs
              </span>
              <ul className="flex flex-col items-center 2xl:text-2xl xl:text-xl lg:text-lg  text-xl justify center ">
                <li className="mb-3">Qualité du soin</li>
                <li className="mb-3">Prévention</li>
                <li className="mb-3">Respect de l’Humain </li>
                <li>Convivialité</li>
              </ul>
            </div>

            <p className="2xl:text-xl xl:text-lg lg:text-md  text-md px-10  2xl:px-20 xl:px-10 lg:px-7 lg:w-1/3 lg-pt-0 pt-12">
              Notre équipe de soignants,{" "}
              <span className="font-bold">
                agrée par la clinique du coureur
              </span>{" "}
              est à votre disposition pour vous accompagner dans votre parcours
              de soins.
              <br></br> <br></br>
              Ils mettent leur expertise et leur bienveillance au service de
              <span className="font-bold"> votre bien-être</span> .<br></br>{" "}
              <br></br>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-10 gap-10 z-20 justify-items-center w-fit ">
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
                src="/laureen.png"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-sky-900 text-3xl  absolute z-30 bottom-5 left-5">
                Martin Larivière
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64 overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                src="/laureen.png"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-sky-900 text-3xl  absolute z-30 bottom-5 left-5">
                Cyril Portal
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64 overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                src="/laureen.png"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-sky-900 text-3xl  absolute z-30 bottom-5 left-5">
                Marcelo Cianti
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64 overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                src="/laureen.png"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-sky-900 text-3xl  absolute z-30 bottom-5 left-5">
                Yann Martez
              </div>
            </div>
            <div className="xl:w-64 xl:h-72 lg:w-56 lg:h-64 overflow-hidden rounded-tl-xl rounded-br-xl relative">
              {" "}
              <img
                src="/laureen.png"
                className=" grayscale hover:scale-110 transition-all duration-300 "
              ></img>
              <div className="text-sky-900 text-3xl  absolute z-30 bottom-5 left-5">
                Sophie Faudin
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipe;
