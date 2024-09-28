"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faPhone,
  faEuroSign,
  faStar,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useRef } from "react";
import "./globals.css";
import { gsap } from "gsap";
const Landing = () => {
  const sectionRef = useRef<HTMLImageElement>(null);
  const mainRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const title3Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLHeadingElement>(null);

  // Animation d'ouverture : le background image occupe tout l'écran
  useEffect(() => {
    const screenWidth = window.innerWidth;
    // Animation d'ouverture : l'élément passe de `h-0` à `h-2/6`
    if (screenWidth > 1000) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: "0%", visibility: "hidden" }, // Démarre avec scaleY: 0
        {
          // L'élément retrouve sa taille initiale (scaleY 1 = 100%)
          duration: 1, // Durée de l'animation
          delay: 3.2,
          ease: "power1.inOut", // Utilisation de power1.inOut pour une animation plus douce
          visibility: "visible",
          opacity: "100%", // Rendre visible pendant l'animation
        }
      );
    }

    gsap.fromTo(
      mainRef.current,
      { height: "100vh" }, // Démarre avec scaleY: 0
      {
        height: "66.67%", // L'élément retrouve sa taille initiale (scaleY 1 = 100%)
        duration: 2, // Durée de l'animation
        delay: 1.8,
        ease: "power1.inOut", // Utilisation de power1.inOut pour une animation plus douce
      }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100, visibility: "hidden" },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 0,
        ease: "power3.out",
        visibility: "visible",
      }
    );
    gsap.fromTo(
      title2Ref.current,
      { opacity: 0, y: 100, visibility: "hidden" },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 0.5,
        ease: "power3.out",
        visibility: "visible",
      }
    );
    gsap.fromTo(
      title3Ref.current,
      { opacity: 0, y: 100, visibility: "hidden" },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 0.8,
        ease: "power3.out",
        visibility: "visible",
      }
    );
    gsap.fromTo(
      subRef.current,
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,

        duration: 1,
        delay: 2.5,
        ease: "power3.out",
        visibility: "visible",
      }
    );
  }, []);

  return (
    <main className="lg:h-auto h-auto lg:min-h-lvh w-full flex flex-col">
      <div className="bg-[url('/bc.jpg')] bg-center lg:bg-fixed bg-scroll w-full bg-cover h-lvh lg:h-lvh text-sky-50 ">
        <div
          ref={mainRef}
          className="w-full relative  items-center justify-center lg:h-4/6 h-lvh font-Straw flex flex-col bg-gradient-to-r from-sky-700/80 to-sky-700/0"
        >
          <div className="items-center flex mb-20  lg:mb-20 flex-col justify-center ">
            <div className="mb-10 lg:mt-10 mt-0 flex flex-col justify-start items-center font-Manrope">
              <div className="overflow-hidden">
                {" "}
                {/* Masquer le texte pendant l'animation */}
                <h1
                  ref={titleRef}
                  className=" lg:font-bold flex lg:flex-row flex-col"
                >
                  <div className="lg:bg-opacity-25 translate-y-0 bg-opacity-0 px-10 lg:px-5 py-8 rounded-full items-center justify-center flex flex-col sm:flex-row font-Straw 2xl:text-6xl lg:text-5xl sm:text-3xl text-4xl">
                    Sport - Santé{" "}
                    <span className="sm:ml-5 mt-5 sm:mt-0 text-sky-200">
                      Mediterranée
                    </span>
                  </div>
                </h1>
              </div>
            </div>
            <div className="overflow-hidden">
              {" "}
              {/* Pour éviter que le texte ne déborde */}
              <h2
                ref={title2Ref}
                className="lg:font-extrabold  font-Straw  font-normal flex sm:flex-row flex-col sm:text-3xl 2xl:text-3xl xl:text-2xl lg:text-2xl text-2xl 2xl:mt-0"
              >
                <span className="lg:mr-3 mr-0 flex flex-col items-center lg:flex-row">
                  Kinésithérapie &{" "}
                </span>
                Ostéopathie du sport
              </h2>
            </div>
            <div className="overflow-hidden">
              {" "}
              <div
                ref={title3Ref}
                className="2xl:text-xl  lg:text-sm text-xl flex items-center justify-center  "
              >
                <Link href="tel:0975965230" passHref>
                  <div className="mt-8 2xl:mt-8 lg:mt-5 text-sky-50 bg-sky-600 py-2 px-4 rounded-full flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50 w-fit transition-colors">
                    09 75 96 52 30
                    <FontAwesomeIcon className="ml-3 " icon={faPhone} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            ref={subRef}
            className=" w-full absolute bottom-0 h-14  bg-slate-200 bg-opacity-25 flex items-center justify-center shadow-2xl text-slate-700 2xl:text-lg lg:text-md overflow-hidden font-Straw font-thin"
          >
            <div className="animate-scroll lg:animate-none whitespace-nowrap flex">
              <div className="2xl:px-20 lg:px-10 px-10">
                Avis Google : 4,7/5{" "}
                <FontAwesomeIcon className="ml-3" icon={faStar} />
              </div>
              <div className="2xl:px-20 lg:px-10 px-10">
                Remboursement mutuelle{" "}
                <FontAwesomeIcon className="ml-3" icon={faEuroSign} />
              </div>
              <div className="2xl:px-20 lg:px-10 px-10">
                Spécialiste du sport{" "}
                <FontAwesomeIcon className="ml-3" icon={faPersonRunning} />
              </div>
              <div className="2xl:px-20 lg:px-10 px-10">
                RDV Rapide{" "}
                <FontAwesomeIcon className="ml-3" icon={faCalendar} />
              </div>
              {/* Dupliquez les éléments pour créer l'effet de boucle continue */}
              <div className="2xl:px-20 lg:px-10 px-10 lg:hidden">
                Avis Google : 4,7/5{" "}
                <FontAwesomeIcon className="ml-3" icon={faStar} />
              </div>
              <div className="2xl:px-20 lg:px-10 px-10 lg:hidden">
                Remboursement mutuelle{" "}
                <FontAwesomeIcon className="ml-3" icon={faEuroSign} />
              </div>
              <div className="2xl:px-20 lg:px-10 px-10 lg:hidden">
                Spécialiste du sport{" "}
                <FontAwesomeIcon className="ml-3" icon={faPersonRunning} />
              </div>
              <div className="2xl:px-20 lg:px-10 px-10 lg:hidden">
                RDV Rapide{" "}
                <FontAwesomeIcon className="ml-3" icon={faCalendar} />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-sky-50 h-2/6  text-sky-900 flex flex-col items-center justify-evenly transition-all duration-2000">
          <div
            ref={sectionRef}
            className="flex items-center lg:flex-row flex-col justify-evenly w-10/12"
          >
            <p className=" font-Straw 2xl:text-xl lg:text-lg  text-md  2xl:w-1/3 xl:w-1/2 lg:w-1/2 2xl:pb-0 xl:pb-6 lg:mt-0">
              {" "}
              Notre équipe pluridisciplinaire place{" "}
              <span className="font-bold">le mouvement </span>au centre de
              chaque approche thérapeutique, convaincue que{" "}
              <span className="font-bold">l’activité physique</span>, adaptée à
              chacun, est la clé de{" "}
              <span className="font-bold">la guérison </span> et de{" "}
              <span className="font-bold">la prévention.</span>
            </p>
            <img
              src="/logocourse.png"
              className="2xl:w-52 xl:w-40 w-0 invisible lg:visible  lg:w-36 md:w-1/3  rounded-full border-2 border-solid border-sky-900  transition-all duration-1000 "
            ></img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
