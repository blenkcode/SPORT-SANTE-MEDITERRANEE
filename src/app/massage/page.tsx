"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import {
  faEuroSign,
  faStar,
  faPersonRunning,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Massage = () => {
  const [sign, setSign] = useState(false);
  const [cal, setCal] = useState(false);
  const [thai, setThai] = useState(false);
  const [ayu, setAyu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  console.log(scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 500) {
        // For screens smaller than or equal to 500px, trigger when scrollY > 200
        if (window.scrollY > 730) {
          setIsVisible(true);
        }
      } else {
        // For larger screens, trigger when scrollY > 320
        if (window.scrollY > 900) {
          setIsVisible(true);
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
    <div className=" h-auto min-h-lvh w-full  flex flex-col font-Straw z-10">
      <div className="bg-[url('/massage.jpg')] bg-center lg:bg-fixed bg-scroll w-full bg-cover  text-sky-50 h-200 ">
        <div className="w-full h-full items-center justify-center font-Straw flex flex-col bg-gradient-to-r from-green-800/70 to-lime-500/0">
          <div className="items-center flex  flex-col justify-center">
            <div className="mb-10 lg:mt-10 mt-0 flex flex-col justify-start items-center font-Manrope">
              <h1 className="ease-in-out duration-title transition-all font-extrabold flex lg:flex-row flex-col">
                <div className="bg-zinc-700 lg:bg-opacity-25 bg-opacity-0 px-10 lg:px-5 py-8 rounded-full items-center justify-center flex flex-col  sm:flex-row font-StrawBold 2xl:text-6xl lg:text-5xl sm:text-3xl text-5xl ">
                  Massage
                </div>
              </h1>
            </div>
            <h2 className="lg:font-extrabold font-Straw transition-all  ease-in-out delay-500 duration-1000 font-normal   flex sm:flex-row flex-col sm:text-3xl  2xl:text-3xl xl:text-2xl lg:text-2xl text-2xl 2xl:mt-0 px-10 lg:px-0">
              {" "}
              Massage corps et visage relaxant alliant bien être et santé, en
              solo ou duo.
            </h2>
          </div>
        </div>
      </div>
      <div className="lg:flex-grow flex-grow-0 h-20  bg-slate-200 flex items-center justify-center shadow-2xl text-slate-700 2xl:text-lg lg:text-md overflow-hidden font-Straw font-thin">
        <div className="animate-scroll lg:animate-none whitespace-nowrap flex">
          <div className="2xl:px-20 lg:px-10 px-10">
            Avis Google : 4,7/5{" "}
            <FontAwesomeIcon className="ml-3" icon={faStar} />
          </div>
          <div className="2xl:px-20 lg:px-10 px-10">
            75 - 140 <FontAwesomeIcon className="ml-3" icon={faEuroSign} />
          </div>
          <div className="2xl:px-20 lg:px-10 px-10">
            Spécialiste du sport{" "}
            <FontAwesomeIcon className="ml-3" icon={faPersonRunning} />
          </div>
          <div className="2xl:px-20 lg:px-10 px-10">
            RDV Rapide <FontAwesomeIcon className="ml-3" icon={faCalendar} />
          </div>
          {/* Dupliquez les éléments pour créer l'effet de boucle continue */}
          <div className="2xl:px-20 lg:px-10 px-10 lg:hidden">
            Avis Google : 4,7/5{" "}
            <FontAwesomeIcon className="ml-3" icon={faStar} />
          </div>
          <div className="2xl:px-20 lg:px-10 px-10 lg:hidden">
            75 - 140 <FontAwesomeIcon className="ml-3" icon={faEuroSign} />
          </div>
          <div className="2xl:px-20 lg:px-10 px-10 lg:hidden">
            Spécialiste du sport{" "}
            <FontAwesomeIcon className="ml-3" icon={faPersonRunning} />
          </div>
          <div className="2xl:px-20 lg:px-10 px-10 lg:hidden">
            RDV Rapide <FontAwesomeIcon className="ml-3" icon={faCalendar} />
          </div>
        </div>
      </div>
      <div className="w-full  bg-slate-50 flex flex-col items-center justify-center lg:py-20 py-10">
        <div className="flex lg:flex-row flex-col-reverse lg:items-start items-center justify-center  ">
          <img
            src="masso.webp"
            className="lg:w-96 w-4/5 rounded-tr-3xl rounded-bl-3xl lg:mr-20 mt-20 lg:mt-0"
          ></img>
          <div className=" text-sky-900 z-20 items-center lg:items-start  lg:w-2/5  flex flex-col ">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl  bg-slate-50 py-2 px-10 rounded-full text-3xl mb-5 lg:-translate-x-56 lg:mt-10 mt-0 text-sky-900 font-StrawBold  w-fit">
              Massages sur mesure{" "}
              <FontAwesomeIcon
                className="lg:ml-5 lg:text-3xl lg:visible invisible text-xl"
                icon={faLeaf}
              />
            </h2>
            <div className="flex justify-between items-center flex-col h-full">
              <div className="xl:text-xl lg:text-lg lg:mt-10 px-10 lg:px-0  ">
                Nous proposons un ensemble de techniques de massage choisi selon
                <span className="font-StrawBold "> vos besoins</span> et vos
                gouts dans le but de composer le massage{" "}
                <span className="font-StrawBold "> qui vous ressemble</span>.
                Nos massages apportent détente et amene vôtre esprit{" "}
                <span className="font-StrawBold "> à lâcher prise</span>, ils
                <span className="font-StrawBold "> stimulent</span> la
                circulation sanguine et lymphatique et participent à lutter
                contre le stress et l&apos;insomnie.
              </div>
              <div className=" lg:text-xl lg:mt-10 mt-10  w-full lg:flex-row flex-col font-bold flex items-center text-sky-900 lg:text-skt-50 justify-center  ">
                <Link href="https://www.massagemarseillan.fr/">
                  <div className="mt-5 mb-10 lg:mb-0  lg:mt-5 text-sky-50 group border-1 border-sky-600 bg-sky-600 py-2 px-4 rounded-full flex font-thin justify-center  items-center cursor-pointer transition-all hover:bg-sky-50 w-fit relative duration-300 overflow-hidden ">
                    {/* <span className="translate-y-5 absolute -translate-x-10">
                      09 75 96 52 30{" "}
                      <FontAwesomeIcon className="ml-3 " icon={faPhone} />
                    </span> */}
                    <span className="hover-group: hover:text-sky-600  opacity-0 translate-">
                      Rendez-vous en ligne
                      <FontAwesomeIcon
                        className="ml-3 text-xl"
                        icon={faCalendar}
                      />
                    </span>
                    <span className="transition-all group-hover:text-sky-600 duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
                      Rendez-vous en ligne
                      <FontAwesomeIcon
                        className="ml-3 text-xl"
                        icon={faCalendar}
                      />
                    </span>
                    <span className="transition-all group-hover:text-sky-600  duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
                      Rendez-vous en ligne
                      <FontAwesomeIcon
                        className="ml-3 text-xl"
                        icon={faCalendar}
                      />
                    </span>
                  </div>
                </Link>
              </div>
              <Link href="tel:0780966796" passHref>
                <div className="mt-8  lg:mt-5 text-sky-50 group border-1 border-sky-600 bg-sky-600 py-2 px-4 rounded-full flex font-thin justify-center  items-center cursor-pointer transition-all hover:bg-sky-50 w-fit relative duration-300 overflow-hidden ">
                  {/* <span className="translate-y-5 absolute -translate-x-10">
                      09 75 96 52 30{" "}
                      <FontAwesomeIcon className="ml-3 " icon={faPhone} />
                    </span> */}
                  <span className="hover-group: hover:text-sky-600  opacity-0 translate-">
                    07 80 96 67 96
                    <FontAwesomeIcon className="ml-3 " icon={faPhone} />
                  </span>
                  <span className="transition-all group-hover:text-sky-600 duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
                    07 80 96 67 96
                    <FontAwesomeIcon className="ml-3 " icon={faPhone} />
                  </span>
                  <span className="transition-all group-hover:text-sky-600  duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
                    07 80 96 67 96
                    <FontAwesomeIcon className="ml-3 " icon={faPhone} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <h3 className="lg:text-3xl text-2xl  mt-20 lg:mt-32 bg-green-600 bg-opacity-50   rounded-full  text-white flex items-center justify-center py-3 px-5 w-fit  font-StrawBold">
          Choissisez votre formule{" "}
        </h3>
        <div className="w-full h-auto bg-slate-50  flex lg:flex-row flex-col items-center justify-center">
          <div className=" h-auto grid grid-cols-1 justify-items-center w-fit gap-10 items-center md:grid-cols-2 lg:py-32 py-20 px-5 z-20  ">
            <div
              onMouseEnter={() => setSign(true)}
              onMouseLeave={() => setSign(false)}
              className="overflow-hidden lg:w-fit w-72 relative rounded-xl "
            >
              <img
                className="w-80 grayscale opacity-55 scale-105"
                src="mass3.png"
              ></img>
              <div
                className={`bg-green-500 transitions-all duration-500 absolute w-full h-full top-0 letf-1  ${
                  sign ? "bg-opacity-100 bg-zinc-800" : "bg-opacity-35"
                }`}
              ></div>
              <h4 className="absolute 2xl:top-10 top-5 left-10 w-full text-white text-2xl">
                Massage Signature
              </h4>
              <img
                src="ma4.png"
                className={`absolute scale-110 opacity-35 -top-1 left-0 h-full  transition-all ${
                  sign ? "scale-125 " : "scale-105"
                }`}
              ></img>
              <div className="w-full h-full absolute 2xl:top-24 top-16 px-10 text-white ">
                Un voyage qui vous transportera dans un espace de détente, de
                déconnexion avec un lâcher prise profond.
              </div>
            </div>
            <div
              onMouseEnter={() => setCal(true)}
              onMouseLeave={() => setCal(false)}
              className="overflow-hidden lg:w-fit w-72 relative rounded-xl"
            >
              <img className="w-80 grayscale scale-105" src="mass4.png"></img>
              <div
                className={`bg-green-500 transition-all duration-500 absolute w-full h-full top-0 letf-1 bg-opacity-35  ${
                  cal ? "bg-opacity-100 bg-zinc-800" : "bg-opacity-35"
                }`}
              ></div>
              <h4 className="absolute 2xl:top-10 top-5 left-10 w-full text-white text-2xl">
                Massage Californien
              </h4>
              <img
                src="ma2.png"
                className={`absolute transtion-all opacity-35 -top-1 left-0 h-full scale-110 transition-all ${
                  cal ? "scale-125 " : "scale-105"
                }`}
              ></img>
              <div className="w-full h-full absolute 2xl:top-24 top-16 text-white px-10 ">
                Un voyage hors du temps où l’esprit et le corps se reconnectent.
                Enveloppant, relaxant, ce massage alterne des mouvements fluides
                et répétés en cercles pour vous offrir un bien être durable et
                profond.
              </div>
            </div>
            <div
              onMouseEnter={() => setThai(true)}
              onMouseLeave={() => setThai(false)}
              className="overflow-hidden lg:w-fit w-72 relative rounded-xl"
            >
              <img className="w-80 grayscale scale-105" src="mass3.png"></img>
              <div
                className={`bg-green-500 transition-all duration-500 absolute w-full h-full top-0 letf-1 bg-opacity-35  ${
                  thai ? "bg-opacity-100 bg-zinc-800" : "bg-opacity-35"
                }`}
              ></div>
              <h4 className="absolute 2xl:top-10 top-5 left-10 w-full text-white text-2xl">
                Massage Thaïlandais
              </h4>
              <img
                src="ma3.png"
                className={`absolute transtion-all opacity-35 -top-1 left-0 h-full scale-110 transition-all ${
                  thai ? "scale-125 " : "scale-105"
                }`}
              ></img>
              <div className="w-full h-full absolute 2xl:top-24 top-16 px-10 text-white ">
                Prêt pour une détente musculaire totale ? Grâce à des techniques
                de pétrissages, acupressions, étirements, ce massage plutôt
                dédié aux sportifs vous invite à un relâchement profond.
              </div>
            </div>
            <div
              onMouseEnter={() => setAyu(true)}
              onMouseLeave={() => setAyu(false)}
              className="overflow-hidden lg:w-fit w-72 relative rounded-xl"
            >
              <img className="w-80 grayscale scale-105" src="mass4.png"></img>
              <div
                className={`bg-green-500 transition-all duration-500 absolute w-full h-full top-0 letf-1 bg-opacity-35  ${
                  ayu ? "bg-opacity-100 bg-zinc-800" : "bg-opacity-35"
                }`}
              ></div>
              <h4 className="absolute 2xl:top-10 top-5 left-10 w-full text-white text-2xl">
                Massage Ayurvédique
              </h4>
              <img
                src="ma1.png"
                className={`absolute transtion-all opacity-35 -top-1 left-0 h-full scale-110 transition-all ${
                  ayu ? "scale-125 " : "scale-105"
                }`}
              ></img>
              <div className="w-full h-full absolute 2xl:top-24 text-white top-16 px-10 ">
                Originaire d’inde, issu de l’Ayurveda, ce massage libère vos
                canaux énergétiques (les nadis) pour harmoniser votre énergie
                physique et mentale.
              </div>
            </div>
          </div>
          <div className=" xl:w-1/5 lg:w-2/5 h-full relative ">
            <div className="lg:text-xl  lg:mt-10 px-10 text-white  mb-20 relative z-20 lg:mb-10  ">
              {" "}
              S&apos;inspirant des bienfaits de la mer et des massages du monde
              ancestraux, vous trouverez dans nos massages une approche unique
              pour vous faire vivre une expérience de qualité unique
            </div>
            <span
              className={` lg:absolute transition-all duration-1000 rounded-full bg-green-600 bg-opacity-50   lg:-top-48 xl:-top-36 2xl:-top-48 -left-40 z-10  scale-90 lg:visible invisible ${
                isVisible ? "w-circle3 h-circle3 visible" : "w-0 h-0 invisible"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Massage;
