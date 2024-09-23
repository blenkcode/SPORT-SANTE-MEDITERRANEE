"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Bikefiting = () => {
  return (
    <div className=" h-auto min-h-lvh w-full flex flex-col font-Straw">
      <div className="bg-[url('/bike.jpg')] bg-center lg:bg-fixed bg-scroll w-full bg-cover  text-sky-50 h-200">
        <div className="w-full h-full items-center justify-center font-Straw flex flex-col bg-gradient-to-r from-violet-800/70 to-lime-500/0">
          <div className="items-center flex  flex-col justify-center">
            <div className="mb-10 lg:mt-10 mt-0 flex flex-col justify-start items-center font-Manrope">
              <h1 className="ease-in-out duration-title transition-all font-extrabold flex lg:flex-row flex-col">
                <div className="bg-zinc-700 lg:bg-opacity-25 bg-opacity-0 px-10 lg:px-5 py-8 rounded-full items-center justify-center flex flex-col  sm:flex-row font-Straw 2xl:text-6xl lg:text-5xl sm:text-3xl text-5xl ">
                  Bike Fiting
                </div>
              </h1>
            </div>
            <h2 className="lg:font-extrabold font-Straw transition-all  ease-in-out delay-500 duration-1000 font-normal   flex sm:flex-row flex-col sm:text-3xl  2xl:text-3xl xl:text-2xl lg:text-2xl text-2xl 2xl:mt-0 px-10 lg:px-0">
              {" "}
              Optimisez Votre Confort et vos Performances avec notre Service de
              Bike Fitting
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full  bg-slate-50 flex flex-col items-center justify-center lg:py-20 py-10">
        <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center  ">
          <img
            src="bike1.png"
            className="lg:w-96 w-60 rounded-tr-3xl rounded-bl-3xl lg:mr-20 mt-5 lg:mt-0"
          ></img>
          <h2 className="xl:text-5xl text-violet-900 bg-slate-50 py-2 px-5 rounded-full lg:text-4xl lg:absolute text-3xl lg:mb-10 2xl:-translate-x-10 lg:translate-x-20 lg:mt-10 mt-10  font-bold w-fit ">
            Ajustez votre vélo à votre corps
          </h2>
          <div className=" text-sky-900 z-20 items-center lg:items-start lg:w-2/5  flex flex-col lg:mt-40 mt-5">
            <div className="flex justify-between items-center flex-col h-full  ">
              <div className=" xl:text-xl lg:text-lg  px-10 lg:px-0  ">
                Vous êtes passionné de cyclisme ou souhaitez simplement
                améliorer votre posture sur votre vélo ? Notre service de Bike
                Fitting vous aide à trouver l&apos;ajustement parfait pour
                allier confort, efficacité et prévention des blessures. Que vous
                soyez amateur ou professionnel, nous vous accompagnons pour
                adapter votre vélo à votre morphologie unique.
              </div>
              <div className=" lg:text-3xl  mt-10  w-full lg:flex-row flex-col font-bold flex items-center text-sky-900 lg:text-skt-50 justify-center  ">
                <Link
                  href="https://www.doctolib.fr/osteopathe/marseillan/cyril-portal"
                  className={`lg:text-xl text-md text-sky-50 bg-sky-600 py-2 px-4 rounded-full lg:ml-10 lg:w-80 transition-all flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50 lg:mt-0 mt-10 `}
                >
                  Rendez-vous en ligne
                  <FontAwesomeIcon className="ml-3 text-xl" icon={faCalendar} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col lg:items-start items-center justify-center lg:mt-32 ">
          <img
            src="bike2.png"
            className="lg:w-100 w-60 rounded-tl-3xl rounded-br-3xl lg:mr-20 mt-20 lg:mt-0"
          ></img>
          <div className=" text-sky-900 z-20 items-center   lg:w-2/5  flex flex-col ">
            <h2 className="xl:text-3xl text-violet-900 lg:text-2xl text-3xl mb-10 lg:translate-x-36 lg:mt-10 mt-10  font-bold w-fit bg-slate-50 py-2 px-5 rounded-full  ">
              Pourquoi le Bike Fitting est-il important ?
            </h2>
            <div className="flex justify-between items-center flex-col h-full">
              <div className=" xl:text-xl lg:text-lg  px-10 lg:px-0 lg:w-2/3  ">
                Chaque cycliste est unique, et un vélo mal ajusté peut entraîner
                des douleurs, des inconforts, voire des blessures à long terme.
                Grâce à notre expertise en kinésithérapie et en biomécanique,
                nous analysons en détail votre posture et vos mouvements afin
                d’optimiser votre positionnement sur votre vélo. L’objectif :
                améliorer vos performances tout en réduisant les risques de
                blessures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikefiting;
