"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "./globals.css";

const Presta = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  console.log(scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 500) {
        // For screens smaller than or equal to 500px, trigger when scrollY > 200
        if (window.scrollY > 940) {
          setIsVisible1(true);
        }
        if (window.scrollY > 1100) {
          setIsVisible2(true);
        }
        if (window.scrollY > 1500) {
          setIsVisible3(true);
        }
        if (window.scrollY > 1750) {
          setIsVisible4(true);
        }
      } else {
        // For larger screens, trigger when scrollY > 320
        if (window.scrollY > 330) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
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
    <div className="lg:pt-20 bg-sky-50 overflow-x-hidden">
      <div className="lg:text-5xl text-2xl lg:h-700 h-fit text-sky-50 bg-sky-900 lg:py-20 flex flex-col items-center justify-center font-Manrope w-full relative ">
        <div
          className={`lg:w-circle lg:h-circle w-0 h-0 rounded-full bg-sky-900 border-2 border-solid border-sky-50 absolute transition-all delay-300 duration-1000 lg:-top-20 -top-10 z-10 ${
            isVisible ? "border-opacity-100" : "border-opacity-0"
          }`}
        ></div>
        <h3 className="mb-20 z-20 lg:absolute relative top-10">
          NOS PRESTATIONS
        </h3>
        <div className="flex z-30 lg:flex-row flex-col lg:mt-32">
          <div
            className={`w-fit flex z-20  mt-0 lg:mt-0 flex-col text-lg lg:-translate-x-56 transition-all duration-2000 ease-in-out items-center rounded-lg lg:pb-20 pb-10 lg:-translate-y-20 ${
              isVisible
                ? "-translate-x-0 lg:-translate-x-56 opacity-100"
                : "-translate-x-80 lg:-translate-x-96 opacity-0"
            } ${
              isVisible1
                ? "translate-x-0 opacity-100 "
                : " translate-x-full opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold py-3 mb-5 px-3 bg-sky-900">
              Bike-Fiting
            </h3>
            <img
              src="/bike.png"
              className=" rounded-full border-2 border-solid border-sky-50 w-40 h-40 shadow-2xl hover:-rotate-12 transition-all ease-in-out duration-300 "
            ></img>
            <Link
              href="/Kinesitherapie"
              className=" text-sm hover:bg-newblue shadow-2xl text-sky-900 rounded-full py-2 px-3 mt-5 cursor-pointer bg-sky-50  transition-colors"
            >
              EN SAVOIR PLUS
            </Link>
          </div>
          <div
            className={`w-fit flex flex-col text-lg lg:-translate-x-24 transition-all duration-2000 ease-in-out items-center rounded-lg lg:pb-20 pb-10 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : " lg:opacity-0 lg:translate-y-56"
            }${
              isVisible2
                ? "-translate-x-0 opacity-100 "
                : " -translate-x-full opacity-0"
            } `}
          >
            <h3 className="text-2xl font-bold py-3">Kinésithérapie</h3>
            <img
              src="/osteo.png"
              className=" rounded-full border-2 border-solid shadow-2xl border-sky-50 w-40 h-40 hover:rotate-12 transition-all ease-in-out duration-300 "
            ></img>
            <Link
              href="/Kinesitherapie"
              className=" text-sm hover:bg-newblue shadow-2xl text-sky-900 rounded-full py-2 px-3 mt-5 cursor-pointer bg-sky-50  transition-colors"
            >
              EN SAVOIR PLUS
            </Link>
          </div>
          <div
            className={`w-fit flex flex-col lg:translate-x-24 text-lg transition-all duration-2000 ease-in-out items-center rounded-lg lg:pb-20 pb-10 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : " lg:opacity-0 lg:translate-y-56"
            } ${
              isVisible3
                ? "translate-x-0 opacity-100 "
                : " translate-x-full opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold py-3 bg-sky-900">Ostéopathie</h3>
            <img
              src="/kiné.png"
              className=" rounded-full border-2 border-solid shadow-2xl border-sky-50 w-40 h-40 hover:-rotate-12 transition-all ease-in-out duration-300 "
            ></img>
            <Link
              href="/Kinesitherapie"
              className=" text-sm hover:bg-newblue shadow-2xl text-sky-900 rounded-full py-2 px-3 mt-5 cursor-pointer bg-sky-50  transition-colors"
            >
              EN SAVOIR PLUS
            </Link>
          </div>
          <div
            className={`w-fit flex z-20 lg:translate-x-56 mt-20 lg:mt-0 flex-col text-lg transition-all duration-2000 ease-in-out items-center rounded-lg lg:pb-20 -translate-y-20 ${
              isVisible
                ? "translate-x-0 lg:translate-x-56 opacity-100"
                : " lg:translate-x-80 opacity-0"
            } ${
              isVisible4
                ? "-translate-x-0 opacity-100 "
                : " -translate-x-full opacity-0"
            }`}
          >
            <h3 className="text-2xl z-20 font-bold py-3 px-5 mb-5 bg-sky-900">
              Massage
            </h3>
            <img
              src="/massage.png"
              className=" rounded-full border-2 border-solid shadow-2xl border-sky-50 w-40 h-40 hover:rotate-12 ease-in-out duration-300 transition-all"
            ></img>
            <Link
              href="/Kinesitherapie"
              className=" text-sm hover:bg-newblue shadow-2xl text-sky-900 rounded-full py-2 px-3 mt-5 cursor-pointer bg-sky-50  transition-colors"
            >
              EN SAVOIR PLUS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presta;
