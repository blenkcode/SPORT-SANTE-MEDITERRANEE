"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleMenu } from "@/store/uiSlice";

export default function Header() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.ui.navbar);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [acceuilHover, setAcceuilHover] = useState(false);
  // const [contactlHover, setContactHover] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handlemenu = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    // Animation d'ouverture : l'élément passe de `h-0` à `h-2/6`
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1000) {
      gsap.fromTo(
        headerRef.current,
        { y: -70, visibility: "hidden" }, // Démarre avec scaleY: 0
        {
          y: 0,
          // L'élément retrouve sa taille initiale (scaleY 1 = 100%)
          duration: 1.5, // Durée de l'animation
          delay: 2.4,
          ease: "power1.inOut", // Utilisation de power1.inOut pour une animation plus douce
          visibility: "visible",
          opacity: "100%", // Rendre visible pendant l'animation
        }
      );
    } else {
      return;
    }
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  console.log(scrollY);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1000) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
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
    <header
      ref={headerRef}
      className={`  font-Straw lg:invisible tracking-widest transition-all transition-bg  duration-500 lg:duration-0 lg:text-sky-100 text-sky-900 2xl:h-20 xl:h-16 lg:h-14   flex  fixed top-0 left-0 w-full z-50 lg:-translate-y-0 h-lvh  transition-bg ${
        isMenuOpen
          ? "translate-y-0 lg:translate-0"
          : "lg:translate-y-0 translate-y-full"
      } `}
    >
      <div
        className={`lg:pl-8 lg:px-10  w-full h-full flex transition-all duration-1000 lg:justify-between justify-evenly items-center lg:flex-row flex-col ${
          isVisible ? "  bg-sky-50" : "lg:bg-transparent bg-sky-50"
        }`}
      >
        <div className="flex lg:flex-row flex-col items-center lg:pt-0 pt-5 h-1/5 lg:h-full">
          <img
            src="/logomain.png"
            className="2xl:h-14 xl:h-12 lg:h-10 h-1/2 lg:mr-8 rounded-full"
          ></img>
          <div
            className={`2xl:text-lg xl:text-md lg:text-xs transition-all duration-500 font-Play mt-10 lg:mt-0 font-bold  ${
              isVisible ? "lg:text-sky-900  " : "lg:text-white "
            }`}
          >
            Sport - Santé Mediterranée{" "}
          </div>
        </div>
        <div className="flex lg:justify-between justify-start lg:flex-row flex-col items-center w-fit lg:h-full h-2/3  font-semibold ">
          <div className="duration-title transition-all flex items-center justify-center ease-in-out delay-500 ">
            <Link
              href="https://www.doctolib.fr/osteopathe/marseillan/cyril-portal"
              className={` text-sky-50 bg-sky-600 py-2 px-4 rounded-full w-fit transition-all 2xl:text-md  lg:text-sm  flex font-thin justify-center items-center cursor-pointer  hover:bg-sky-50 hover:border-sky-600 hover:text-sky-600 border-solid border-2 border-sky-600 mt-10 lg:mt-0`}
            >
              Rendez-vous en ligne
            </Link>
          </div>
          <Link
            className={`px-8 flex justify-center  relative items-center  2xl:text-md lg:text-sm  lg:h-full w-fit transition-all lg:mt-0 mt-14  ${
              isVisible ? "lg:text-sky-900 " : "lg:text-white text-sky-900"
            }`}
            href="/"
            onMouseEnter={() => setAcceuilHover(true)}
            onMouseLeave={() => setAcceuilHover(false)}
            onClick={handlemenu}
          >
            ACCUEIL
            <div
              className={`h-0.5  transtion-all- duration-500 absolute bottom-0  ${
                acceuilHover
                  ? "opacity-100 w-1/2 -translate-y-5"
                  : "opacity-0 w-0"
              }  ${isVisible ? "text-sky-900 " : "text-white"}`}
            ></div>
          </Link>
          {/* <Link
    className="px-8 flex justify-center  relative items-center  2xl:text-md lg:text-sm h-20 lg:h-full w-fit  transition-all"
    href="/"
    onMouseEnter={() => setContactHover(true)}
    onMouseLeave={() => setContactHover(false)}
    onClick={handlemenu}
  >
    CONTACT
    <div
      className={`h-0.5 transtion-all duration-500 absolute bottom-0 bg-sky-900 ${
        contactlHover ? "opacity-100 w-full" : "opacity-0 w-0"
      } `}
    ></div>
  </Link> */}
          {/* Dropdown for KINESITHERAPIE */}
          <div
            className={`px-6 relative flex items-center 2xl:text-md lg:text-sm h-20 lg:h-full  w-fit justify-center transition-all  ${
              isVisible ? "text-sky-900 " : "text-white"
            }`}
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
              className={`h-0.5  transtion-all- duration-500 absolute bottom-0 bg-sky-100 ${
                dropdownOpen
                  ? "lg:opacity-100 lg:w-full opacity-0"
                  : "lg:opacity-0 w-0 "
              }  ${isVisible ? "bg-sky-900 " : "bg-sky-100"}`}
            ></div>

            {/* Dropdown Menu */}
            <div
              onMouseLeave={handleMouseLeave}
              className={`absolute transition-all lg:text-sky-50 text-sky-900 w-full duration-500 bg-sky-700 py-5 left-0  lg:mt-72 mt-40 2xl:-translate-y-5 xl:-translate-y-7 lg:-translate-y-8 lg:bg-opacity-50 bg-opacity-0  2xl:text-md  lg:text-xs flex flex-col h-fit justify-between items-center lg:items-start rounded-b-lg z-10 border-sky-100 -translate-y-4  lg:${
                dropdownOpen ? "opacity-100 " : "opacity-0 "
              } ${
                isMenuOpen
                  ? "opacity-100 lg:opacity-0"
                  : "opacity-0 lg:opacity-0"
              }`}
            >
              <Link
                onClick={handlemenu}
                className="px-8 py-2 mb-2 lg:w-full lg:mb-0 lg:hover:bg-sky-900 lg:hover:text-sky-100"
                href="/kinesitherapie"
              >
                KINESITHERAPIE
              </Link>
              <Link
                onClick={handlemenu}
                className="px-8 py-2 mb-2 lg:mb-0 lg:w-full  lg:hover:bg-sky-900 lg:hover:text-sky-100"
                href="/osteopathie"
              >
                OSTEOPATHIE
              </Link>
              <Link
                onClick={handlemenu}
                className="px-8 py-2 mb-2 lg:mb-0 lg:w-full lg:hover:bg-sky-900 lg:hover:text-sky-100"
                href="/bikefiting"
              >
                BIKE FITTING
              </Link>
              <Link
                onClick={handlemenu}
                className="px-8 py-2 lg:w-full  lg:hover:bg-sky-900 lg:hover:text-sky-100"
                href="/massage"
              >
                MASSAGE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
