import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHeartPulse } from "@fortawesome/free-solid-svg-icons";

const Kinesitherapie = () => {
  return (
    <div className=" h-auto min-h-lvh w-full flex flex-col font-Straw">
      {" "}
      <div className="bg-[url('/kine.png')] bg-center lg:bg-fixed bg-scroll w-full bg-cover lg:h-200 h-lvh text-sky-50 ">
        <div className="w-full h-full items-center justify-center font-Straw flex flex-col bg-gradient-to-r from-orange-800/80 to-orange-500/0">
          <div className="items-center flex  flex-col justify-center">
            <img
              src="/logomain.png"
              className="rounded-full lg:w-0 w-2/5 mb-10"
            ></img>
            <div className="mb-10 lg:mt-10 mt-0 flex flex-col justify-start items-center font-Manrope">
              <h1 className="ease-in-out duration-title transition-all font-extrabold flex lg:flex-row flex-col">
                <div className="bg-zinc-700 lg:bg-opacity-25 bg-opacity-0 px-10 lg:px-5 py-8 rounded-full items-center justify-center flex flex-col  sm:flex-row font-Straw 2xl:text-6xl lg:text-5xl sm:text-3xl text-4xl ">
                  Kinésithérapie
                </div>
              </h1>
            </div>
            <h2 className="lg:font-extrabold font-Straw transition-all  ease-in-out delay-500 duration-1000 font-normal   flex sm:flex-row flex-col sm:text-3xl  2xl:text-3xl xl:text-2xl lg:text-2xl text-2xl 2xl:mt-0">
              {" "}
              Reprenez le contrôle de votre corps
            </h2>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center bg-slate-50 lg:py-28 py-10">
        <img
          src="course.png"
          className="lg:w-96 w-60 rounded-tr-3xl rounded-bl-3xl lg:mr-20 mt-5 lg:mt-0"
        ></img>
        <h2 className="xl:text-5xl text-amber-700 bg-slate-50 py-2 px-5 rounded-full lg:text-4xl lg:absolute text-3xl lg:mb-10 2xl:-translate-x-10 lg:translate-x-20 lg:mt-10 mt-10  font-bold w-fit ">
          Par le mouvement <FontAwesomeIcon icon={faHeartPulse} />
        </h2>
        <div className=" text-sky-900 z-20 items-center lg:items-start lg:w-2/5  flex flex-col lg:mt-40 mt-5">
          <div className="flex justify-between items-center flex-col h-full  ">
            <div className=" xl:text-xl lg:text-lg  px-10 lg:px-0  ">
              Notre cabinet de kinésithérapie est spécialisé dans le traitement
              par le mouvement, en particulier chez les sportifs. Grâce à notre
              expertise, nous vous aidons à corriger vos déséquilibres, prévenir
              les blessures et optimiser vos performances. Notre service
              d’analyse de course permet d’identifier et de traiter les
              anomalies de votre foulée afin de vous permettre de courir plus
              efficacement et en toute sécurité.
            </div>
            <div className=" lg:text-3xl  mt-10  w-full lg:flex-row flex-col font-bold flex items-center text-sky-900 lg:text-skt-50 justify-center  ">
              <Link
                href="https://www.doctolib.fr/osteopathe/marseillan/cyril-portal"
                className={`lg:text-xl text-md text-sky-50 bg-sky-600 py-2 px-4 rounded-full lg:ml-10 lg:w-80 transition-all flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:border-sky-600 border-1 border-solid hover:bg-sky-50 lg:mt-0 mt-10 mb-10 lg:mb-0 `}
              >
                Rendez-vous en ligne
                <FontAwesomeIcon className="ml-3 text-xl" icon={faCalendar} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-sky-900 z-20 bg-orange-100 bg-opacity-10 items-center lg:items-start   flex flex-col lg:py-20 py-10 justify-center relative">
        <div className="flex justify-between items-center flex-col h-full  ">
          {" "}
          <h4 className="w-fit text-slate-50 font-bold text-2xl lg:text-4xl z-20">
            Rééducation Fonctionnelle
          </h4>
          <div className="flex  items-center justify-center flex-col lg:mt-20 mt-10">
            {" "}
            <div className=" xl:text-xl lg:text-lg  2xl:w-2/3   px-10 lg:px-36  lg:mt-0 text-slate-50 z-20">
              Chez nous, le mouvement est au cœur de la rééducation. Nous
              privilégions des exercices actifs et spécifiques pour chaque
              patient afin de renforcer les muscles, améliorer la souplesse et
              rétablir les schémas de mouvement naturels. Que vous souffriez de
              douleurs articulaires, musculaires ou de blessures sportives, nous
              créons un plan de traitement adapté à vos besoins.
            </div>
            <img
              src="/kine2.webp"
              className="lg:w-2/5 px-10 z-20 lg:px-0 lg:mt-20 mt-10 rounded-xl"
            ></img>
            <div className="w-circle3 h-circle3 left-96 2xl:top-32 lg:top-20 2xl:-translate-x-32 lg:-translate-x-80 lg:scale-75 2xl:scale-100 invisible lg:visible  bg-sky-900 absolute rounded-full z-10"></div>
            <div className="w-circle3 h-circle3 right-96 2xl:-bottom-10 lg:-bottom-10 2xl:translate-x-80 lg:translate-x-90 lg:scale-50 2xl:scale-75 invisible lg:visible  bg-sky-900 absolute rounded-full z-10"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-slate-50 items-center justify-center ">
        <h2 className="xl:text-4xl text-sky-900 lg:text-4xl text-3xl mt-10 lg:mt-20 font-bold w-fit bg-slate-50 py-2 px-5  lg:mb-20 mb-10 rounded-full">
          Analyse de Course
        </h2>
        <div className="text-sky-900 2xl:w-1/2 lg:w-2/3 px-10 xl:text-xl lg:text-lg lg:mb-10 ">
          L’analyse de course permet d’identifier les anomalies dans la
          technique de course qui peuvent être à l’origine de douleurs ou de
          blessures à long terme. Que vous soyez un coureur occasionnel ou un
          athlète confirmé, cette analyse détaillée de votre foulée vous aidera
          à courir plus efficacement tout en minimisant les risques de blessure.
        </div>
        <div className="w-full h-1 translate-y-20 invisible lg:visible  bg-amber-900 absolute"></div>
        <div className="flex lg:flex-row flex-col items-center justify-around w-full space-y-10 lg:space-y-0 lg:space-x-0 text-sky-900 mt-20 pb-20">
          {/* Section 1: Analyse de la Posture et des Mouvements */}
          <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
            <h4 className="lg:text-2xl text-xl mb-4">
              Observation et Évaluation :
            </h4>
            <div className="lg:w-72 w-64 h-64 lg:h-72 rounded-full  overflow-hidden relative">
              <div className="bg-orange-300 bg-opacity-50 absolute w-full h-full"></div>
              <img
                src="/observation.png"
                alt="Ajustement du Vélo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" lg:text-lg text-center w-80 h-32 px-5 mb-4 mt-10">
              Nous analysons votre posture et vos mouvements en courant grâce à
              des outils de capture vidéo avancés.
            </div>
          </div>

          {/* Section 2: Ajustement du Vélo */}
          <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
            <h4 className="lg:text-2xl text-xl mb-4">
              Correction Personnalisée :
            </h4>
            <div className="lg:w-72 w-64 h-64 lg:h-72 rounded-full overflow-hidden relative">
              <div className="bg-orange-300 bg-opacity-50 absolute w-full h-full"></div>
              <img
                src="/analyse.webp"
                alt="Ajustement du Vélo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" lg:text-lg text-center w-80 h-32 px-5 mb-4 mt-10">
              Nous identifions les points à améliorer, qu'il s'agisse d'une
              mauvaise posture, d'un appui inapproprié ou d'un déséquilibre
              musculaire.
            </div>
          </div>

          {/* Section 3: Conseils Personnalisés */}
          <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
            <h4 className="lg:text-2xl text-xl mb-4">
              Programme de Rééducation :{" "}
            </h4>

            <div className="lg:w-72 w-64 h-64 lg:h-72 rounded-full overflow-hidden relative">
              <div className="bg-orange-300 bg-opacity-50 absolute w-full h-full"></div>
              ${" "}
              <img
                src="/final.webp"
                alt="Ajustement du Vélo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className=" lg:text-lg text-center w-80 h-32 px-5 mb-4 mt-10">
              Nous élaborons un plan d'exercices et de conseils pour optimiser
              votre technique et protéger vos articulations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kinesitherapie;
