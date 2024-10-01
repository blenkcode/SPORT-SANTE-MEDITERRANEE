import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";

import {
  faEuroSign,
  faStar,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
const Osteopathie = () => {
  return (
    <div className=" h-auto min-h-lvh w-full flex flex-col font-Straw">
      {" "}
      <div className="bg-[url('/coveranat.webp')] bg-center lg:bg-fixed bg-scroll w-full bg-cover h-200  text-sky-50 ">
        <div className="w-full h-full items-center justify-center font-Straw flex flex-col bg-gradient-to-r from-sky-800/80 to-orange-500/0">
          <div className="items-center flex  flex-col justify-center">
            <div className="mb-10 lg:mt-10 mt-0 flex flex-col justify-start items-center font-Manrope">
              <h1 className="ease-in-out duration-title transition-all  flex lg:flex-row flex-col">
                <div className="bg-zinc-700 lg:bg-opacity-25 bg-opacity-0 px-10 lg:px-5 py-8 rounded-full items-center justify-center flex flex-col  sm:flex-row font-StrawBold 2xl:text-6xl lg:text-5xl sm:text-3xl text-4xl ">
                  Ostéopathie
                </div>
              </h1>
            </div>
            <h2 className="lg:font-extrabold font-Straw transition-all  ease-in-out delay-500 duration-1000 font-normal   flex sm:flex-row flex-col sm:text-3xl  2xl:text-3xl xl:text-2xl lg:text-2xl text-2xl 2xl:mt-0 px-10 items-center justify-center w-full ">
              {" "}
              <span>Retrouver l’équilibre</span>
              <span className="lg:ml-2 ">naturellement</span>
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
            Spécialiste du sport{" "}
            <FontAwesomeIcon className="ml-3" icon={faPersonRunning} />
          </div>
          <div className="2xl:px-20 lg:px-10 px-10 lg:hidden">
            RDV Rapide <FontAwesomeIcon className="ml-3" icon={faCalendar} />
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse flex-col lg:items-start items-center justify-center bg-slate-50 lg:py-20 py-10">
        <h2 className="xl:text-5xl text-sky-900 bg-slate-50 py-2 px-10 rounded-full lg:text-4xl lg:absolute text-3xl lg:mb-10 2xl:-translate-x-10 lg:translate-x-20 lg:mt-10 mt-0 mb-5  font-StrawBold  w-fit ">
          Approche personnalisée{" "}
          <FontAwesomeIcon
            className="text-2xl ml-3 invisible lg:visible"
            icon={faUser}
          />
        </h2>
        <div className=" text-sky-900 z-20 items-center lg:items-start lg:w-2/5 2xl:w-1/3  flex flex-col lg:mt-40 mt-5">
          <div className="flex justify-between items-center flex-col h-full  ">
            <div className=" xl:text-xl lg:text-lg  px-10 lg:px-0  ">
              Notre approche thérapeutique douce repose sur la manipulation
              manuelle du corps pour rétablir son équilibre naturel. Nous
              mettons à votre disposition une expertise complète pour soulager
              vos douleurs, améliorer votre mobilité et favoriser le bien-être
              général. En identifiant la cause sous-jacente de vos douleurs, nos
              ostéopathes restaurent les capacités fonctionnelles de votre
              corps.
            </div>
            <div className=" lg:text-xl  mt-5 xl:mt-20  w-full lg:flex-row flex-col font-bold flex items-center text-sky-900 lg:text-skt-50 justify-center  ">
              <Link href="https://www.doctolib.fr/osteopathe/marseillan/cyril-portal">
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
          </div>
        </div>
        <img
          src="ost.webp"
          className="lg:w-96 w-4/5 rounded-tr-3xl rounded-bl-3xl lg:mr-20 mt-5 lg:mt-0"
        ></img>
      </div>
      <div className=" text-sky-900 z-20 bg-slate-200 items-center lg:items-start   flex flex-col lg:py-20 py-10 justify-center  overflow-hidden relative">
        <div className="w-circle3 h-circle3 left-96 2xl:top-32 lg:top-20 2xl:-translate-x-96 lg:-translate-x-80 lg:scale-75 2xl:scale-100   bg-sky-300 bg-opacity-50 absolute rounded-full z-10"></div>
        <div className="w-circle3 h-circle3 lg:right-10 xl:right-96 2xl:-bottom-10 lg:-bottom-10 2xl:translate-x-80 lg:translate-x-96 lg:scale-50 2xl:scale-75 invisible lg:visible  bg-sky-300 bg-opacity-50  absolute rounded-full z-10"></div>
        <div className="flex justify-between items-center flex-col h-full  ">
          {" "}
          <h4 className="w-fit text-sky-900 font-StrawBold text-2xl lg:text-4xl z-20 px-10">
            L’ostéopathie améliore vos performances
          </h4>
          <div className="flex  items-center justify-center flex-col lg:mt-20 mt-10">
            {" "}
            <div className=" xl:text-xl lg:text-lg  2xl:w-2/3   px-10 lg:px-36  lg:mt-0 text-sky-900 z-20">
              Par son action spécifique sur l’ensemble du corps, l’ostéopathe
              saura reconnaître et traitera les véritables causes des douleurs
              limitant la pratique de l’activité sportive. Par son efficacité,
              il améliore le potentiel et la puissance musculaire, la souplesse
              articulaire et la capacité respiratoire.
            </div>
          </div>
        </div>
      </div>
      <div className="flex 6 flex-col bg-slate-50 items-center justify-center ">
        <h2 className="xl:text-4xl text-sky-900  bg-sky-300 bg-opacity-50 py-2lg:text-4xl text-3xl mt-10 lg:mt-20 font-StrawBold w-fit  py-2 px-5  lg:mb-20 mb-10 rounded-full ">
          Quand consulter ?
        </h2>
        <div className="text-sky-900 border-b-2 border-zinc-500 border-opacity-30 pb-10 flex items-start w-full lg:px-44 px-10 xl:text-xl lg:text-lg lg:mb-10 flex-col">
          <h5 className="font-StrawBold">À titre préventif :</h5>
          Pour établir un “check up”, pour préparer une épreuve.
        </div>
        <div className="text-sky-900 border-b-2 border-zinc-500 border-opacity-30 pb-10 flex items-start w-full lg:px-44 px-10 xl:text-xl lg:text-lg lg:mb-10  flex-col mt-10">
          <h5 className="font-StrawBold">À titre curatif :</h5>
          <ul>
            <li>
              Pour rééquilibrer de façon très précise les axes articulaires qui
              ont été perturbés par un choc;
            </li>
            <li>
              Après fractures, entorses, opérations chirurgicales pour aider à
              une bonne cicatrisation;
            </li>
            <li>Pour effacer les traumatismes même anciens.</li>
          </ul>
        </div>
        <div className="text-sky-900 border-opacity-30 pb-5 flex items-start w-full lg:px-44 px-10 xl:text-xl lg:text-lg lg:mb-20 flex-col mt-10">
          <h5 className="font-StrawBold">Mais aussi en cas de :</h5>
          <ul>
            <li>
              Chutes sans traumatismes osseux ni lésions visibles sur une
              radiodouleurs articulaires diverses
            </li>
            <li>
              Sciatiques, cruralgies, cervicalgies, dorsalgies, lombalgies;
            </li>
            <li>Stress, manque de concentration, troubles du sommeil.</li>
            <li>Maux de tête, troubles de l’équilibre, vertiges</li>
            <li>Essoufflement à l’effort, &quot;point de côté&quot;</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Osteopathie;
