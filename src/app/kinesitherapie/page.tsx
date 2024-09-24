import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Kinesitherapie = () => {
  return (
    <div className=" h-auto min-h-lvh w-full flex flex-col font-Straw">
      {" "}
      <div className="bg-[url('/kine.png')] bg-center lg:bg-fixed bg-scroll w-full bg-cover lg:h-200 h-lvh text-sky-50 ">
        <div className="w-full h-full items-center justify-center font-Straw flex flex-col bg-gradient-to-r from-orange-800/60 to-orange-500/0">
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
              Reprenez le contrôle de vos mouvements
            </h2>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center bg-slate-50 py-28 ">
        <img
          src="course.png"
          className="lg:w-96 w-60 rounded-tr-3xl rounded-bl-3xl lg:mr-20 mt-5 lg:mt-0"
        ></img>
        <h2 className="xl:text-5xl text-amber-700 bg-slate-50 py-2 px-5 rounded-full lg:text-4xl lg:absolute text-3xl lg:mb-10 2xl:-translate-x-10 lg:translate-x-20 lg:mt-10 mt-10  font-bold w-fit ">
          Par le mouvement
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
                className={`lg:text-xl text-md text-sky-50 bg-sky-600 py-2 px-4 rounded-full lg:ml-10 lg:w-80 transition-all flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:border-sky-600 border-1 border-solid hover:bg-sky-50 lg:mt-0 mt-10 `}
              >
                Rendez-vous en ligne
                <FontAwesomeIcon className="ml-3 text-xl" icon={faCalendar} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-sky-900 z-20 items-center lg:items-start lg:w-2/5  flex flex-col lg:mt-40 mt-5">
        <div className="flex justify-between items-center flex-col h-full  ">
          <div className=" xl:text-xl lg:text-lg  px-10 lg:px-0  ">
            Chez nous, le mouvement est au cœur de la rééducation. Nous
            privilégions des exercices actifs et spécifiques pour chaque patient
            afin de renforcer les muscles, améliorer la souplesse et rétablir
            les schémas de mouvement naturels. Que vous souffriez de douleurs
            articulaires, musculaires ou de blessures sportives, nous créons un
            plan de traitement adapté à vos besoins.
          </div>
          <div className=" xl:text-xl lg:text-lg  px-10 lg:px-0  ">
            La rééducation ne se limite pas au soulagement de la douleur. Nous
            travaillons avec vous pour rétablir les capacités fonctionnelles de
            votre corps, que ce soit pour courir, sauter, ou simplement marcher
            sans douleur. Grâce à une approche axée sur le mouvement, nous
            facilitons une récupération durable et efficace.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kinesitherapie;
