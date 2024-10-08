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

      if (screenWidth <= 1000) {
        // For screens smaller than or equal to 500px, trigger when scrollY > 200
        if (window.scrollY > 311) {
          setIsVisible2(true);
        }
        if (window.scrollY > 620) {
          setIsVisible1(true);
        }
        if (window.scrollY > 950) {
          setIsVisible3(true);
        }
        if (window.scrollY > 1260) {
          setIsVisible4(true);
        }
      } else {
        // For larger screens, trigger when scrollY > 320
        if (window.scrollY > 330) {
          setIsVisible(true);
        }
        // if (window.scrollY > 1200) {
        //   setIsVisible(false);
        // }
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
    <div className="lg:pt-20   bg-sky-50 overflow-x-hidden lg:overflow-x-visible overflow-hidden h-fit ">
      <div className="lg:text-3xl text-2xl lg:h-200 h-fit text-sky-50  lg:py-20 flex flex-col items-center justify-center font-Straw w-full relative ">
        <div
          className={` rounded-full bg-sky-900 bg-opacity-50 border-2  border-solid border-sky-50 absolute transition-all delay-300 duration-2000 lg:-top-20 -top-10 z-10 ${
            isVisible
              ? "border-opacity-100 xl:w-circle xl:h-circle lg:w-circle2 lg:h-circle2 w-0 h-0 visible"
              : "w-0 h-0 border-opacity-0 invisible"
          }`}
        ></div>
        <div
          className={` rounded-full bg-sky-900 bg-opacity-30  border-2 border-solid border-sky-50 absolute transition-all  duration-2000 lg:-top-20 -top-10 z-10 ${
            isVisible
              ? "border-opacity-100 xl:w-circle xl:h-circle lg:w-circle2 lg:h-circle2 w-0 h-0 visible"
              : "w-0 h-0 border-opacity-0 invisible"
          }`}
        ></div>
        <h3
          className={`lg:mb-20 mb-10 z-20 lg:text-3xl text-xl   w-fit lg:-translate-y-5 px-5  rounded-full py-2 items-center justify-center flex lg:absolute delay-300 duration-500 transition-all relative top-10  ${
            isVisible
              ? "text-sky-900 bg-sky-50 "
              : "lg:text-sky-900 text-white bg-sky-900 bg-opacity-40 lg:bg-transparent"
          } `}
        >
          Nos Prestations{" "}
        </h3>
        <div className="flex z-30 lg:flex-row flex-col lg:mt-32 items-center">
          <div className="flex flex-col-reverse lg:flex-row">
            <div
              className={`w-fit flex z-20  mt-0 lg:mt-0 flex-col text-lg  transition-all duration-1000 ease-out items-center delay-100 rounded-lg lg:pb-20 pb-0 lg:-translate-y-24 ${
                isVisible
                  ? "-translate-x-0 xl:-translate-x-56 lg:-translate-x-36 opacity-100"
                  : "-translate-x-80 lg:-translate-x-96 opacity-0"
              } ${
                isVisible1
                  ? "translate-x-0 opacity-100 "
                  : " translate-x-full opacity-0"
              }`}
            >
              {" "}
              <h3 className="lg:text-xl text-2xl text-sky-900 mt-10 lg:mt-0 font-StrawBold py-3 mb-0 lg:mb-0 px-3 ">
                Bike-Fitting
              </h3>
              <img
                src="/bike.png"
                className=" rounded-full  border-4 border-solid border-sky-50 w-40 h-40 shadow-2xl hover:scale-110 transition-all ease-in-out duration-300 "
              ></img>
              <Link
                href="/bikefiting"
                className=" text-xs hover:bg-newblue shadow-2xl text-sky-900 rounded-full py-2 px-3 mt-5 cursor-pointer border-1 border-sky-900 bg-sky-50  transition-colors"
              >
                En savoir plus
              </Link>
            </div>
            <div
              className={`w-fit flex flex-col text-lg xl:-translate-x-24 lg:-translate-x-14 transition-all duration-1000 ease-out delay-100  items-center rounded-lg mt-10 lg:mt-0 lg:pb-20 pb-0 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : " lg:opacity-0 lg:translate-y-56"
              }${
                isVisible2
                  ? "-translate-x-0 opacity-100 "
                  : " -translate-x-full opacity-0"
              } `}
            >
              <h3 className="lg:text-xl text-2xl lg:text-white text-sky-900 font-StrawBold py-3">
                Kinésithérapie
              </h3>
              <div className="w-40 h-40 rounded-full border-4 border-solid shadow-2xl border-sky-50 overflow-hidden relative hover:scale-110 transition-all ease-in-out duration-300">
                <img src="/testkine.png" className="w-full h-full " />
                <div className="absolute inset-0 bg-amber-600 bg-opacity-50"></div>
              </div>

              <Link
                href="/kinesitherapie"
                className=" text-xs hover:bg-newblue shadow-2xl text-sky-900 rounded-full py-2 px-3 mt-5 cursor-pointer bg-sky-50 border-1 border-sky-900 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </div>
          <div
            className={`w-fit flex flex-col xl:translate-x-24 lg:translate-x-14 text-lg transition-all duration-1000 ease-out  delay-100 items-center mt-10 lg:mt-0 rounded-lg lg:pb-20 pb-0 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : " lg:opacity-0 lg:translate-y-56"
            } ${
              isVisible3
                ? "translate-x-0 opacity-100 "
                : " translate-x-full opacity-0"
            }`}
          >
            <h3 className="lg:text-xl text-2xl lg:text-white text-sky-900 font-StrawBold py-3 ">
              Ostéopathie
            </h3>
            <img
              src="/kiné.png"
              className=" rounded-full  border-4 border-solid shadow-2xl border-sky-50 w-40 h-40 hover:scale-110 transition-all ease-in-out duration-300 "
            ></img>
            <Link
              href="/osteopathie"
              className=" text-xs hover:bg-newblue shadow-2xl text-sky-900 rounded-full py-2 px-3 mt-5 cursor-pointer bg-sky-50 border-1 border-sky-900 transition-colors"
            >
              En savoir plus
            </Link>
          </div>
          <div
            className={`w-fit flex z-20  mt-20 lg:mt-0 flex-col text-lg transition-all duration-1000 ease-in-out items-center rounded-lg delay-100 lg:pb-24 -translate-y-20 ${
              isVisible
                ? "translate-x-0 xl:translate-x-56 lg:translate-x-36 opacity-100"
                : " lg:translate-x-80 opacity-0"
            } ${
              isVisible4
                ? "-translate-x-0 opacity-100 "
                : " -translate-x-full opacity-0"
            }`}
          >
            <h3 className="lg:text-xl text-2xl text-sky-900 z-20 font-StrawBold py-3 px-5 mb-0 lg:mb-0 mt-10 lg:mt-0">
              Massage
            </h3>
            <img
              src="/massage.png"
              className=" rounded-full  border-4 border-solid shadow-2xl border-sky-50 w-40 h-40 hover:scale-110 ease-out  duration-300 transition-all"
            ></img>
            <Link
              href="/massage"
              className=" text-xs hover:bg-newblue shadow-2xl text-sky-900 border-1 border-sky-900 rounded-full py-2 px-3 mt-5 cursor-pointer bg-sky-50  transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presta;
