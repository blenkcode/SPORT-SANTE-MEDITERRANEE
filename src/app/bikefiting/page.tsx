"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faBicycle } from "@fortawesome/free-solid-svg-icons";
import {
  faEuroSign,
  faStar,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
const Bikefiting = () => {
  return (
    <div className=" h-auto min-h-lvh w-full flex flex-col font-Straw">
      <div className="bg-[url('/bike.jpg')] bg-center lg:bg-fixed bg-scroll w-full bg-cover  text-sky-50 h-200">
        <div className="w-full h-full items-center justify-center font-Straw flex flex-col bg-gradient-to-r from-violet-800/70 to-lime-500/0">
          <div className="items-center flex  flex-col justify-center">
            <div className="mb-10 lg:mt-10 mt-0 flex flex-col justify-start items-center font-Manrope">
              <h1 className="ease-in-out duration-title transition-all lg:font-extrabold flex lg:flex-row flex-col">
                <div className="bg-zinc-700 lg:bg-opacity-25 bg-opacity-0 px-10 lg:px-5 py-8 rounded-full items-center justify-center flex flex-col  sm:flex-row font-StrawBold 2xl:text-6xl lg:text-5xl sm:text-3xl text-4xl ">
                  Bike Fitting
                </div>
              </h1>
            </div>
            <h2 className="lg:font-extrabold font-Straw transition-all  ease-in-out delay-500 duration-1000 font-normal   flex sm:flex-row flex-col sm:text-3xl  2xl:text-3xl xl:text-2xl lg:text-2xl text-2xl 2xl:mt-0 px-8 lg:px- items-center justify-center">
              {" "}
              <span>Optimisez votre confort </span>
              <span className="lg:ml-2">et vos performances</span>
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
            Remboursement mutuelle{" "}
            <FontAwesomeIcon className="ml-3" icon={faEuroSign} />
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
            Remboursement mutuelle{" "}
            <FontAwesomeIcon className="ml-3" icon={faEuroSign} />
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
        <div className="flex lg:flex-row-reverse flex-col lg:items-start items-center justify-center  ">
          <h2 className="xl:text-5xl text-sky-900 bg-slate-50 py-2 px-10 rounded-full lg:text-4xl lg:absolute text-3xl lg:mb-10 2xl:-translate-x-10 lg:translate-x-20 lg:mt-10  font-StrawBold w-fit  ">
            Ajustez votre vélo à votre corps{" "}
            <FontAwesomeIcon
              icon={faBicycle}
              className="ml-3 invisible lg:visible text-3xl "
            />
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
              <div className=" lg:text-xl  mt-10  w-full lg:flex-row flex-col font-bold flex items-center text-sky-900 lg:text-skt-50 justify-center  ">
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
            src="bike1.png"
            className="lg:w-96 w-4/5 rounded-tr-3xl rounded-bl-3xl lg:mr-20 mt-5 lg:mt-0"
          ></img>
        </div>

        <div className="flex flex-col items-center justify-center lg:mt-24 mt-16">
          <h2 className="xl:text-4xl  text-white bg-violet-900 bg-opacity-50 lg:text-2xl text-3xl mt-10 font-StrawBold w-fit  py-2 px-5 mb-20 rounded-full">
            Notre processus
          </h2>
          <div className="w-full h-1 invisible lg:visible bg-sky-900 absolute"></div>
          <div className="flex lg:flex-row flex-col items-center justify-around w-full space-y-0 lg:space-y-0 xl:space-x-32 lg:space-x-10 text-sky-900">
            {/* Section 1: Analyse de la Posture et des Mouvements */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/3 mt-10 lg:mt-0">
              <h4 className="lg:text-2xl font-StrawBold text-2xl mb-4">
                Analyse de la Posture
              </h4>
              <div className="w-72 lg:w-64 lg:h-64 rounded-full h-72 overflow-hidden relative">
                <div className="bg-violet-700 bg-opacity-30 absolute w-full h-full "></div>
                <img
                  src="/ana.png"
                  alt="Analyse de la posture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:text-md text-center w-80 h-32 px-5 mb-4 mt-10">
                Nous réalisons une analyse complète de votre posture et de vos
                mouvements en pédalant.
              </div>
            </div>

            {/* Section 2: Ajustement du Vélo */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
              <h4 className="lg:text-2xl text-2xl mb-4 font-StrawBold">
                Ajustement du Vélo
              </h4>
              <div className="w-72 rounded-full h-72 lg:w-64 lg:h-64 overflow-hidden relative">
                <div className="bg-violet-700 bg-opacity-30 absolute w-full h-full"></div>
                <img
                  src="/ajust.webp"
                  alt="Ajustement du Vélo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:text-md text-center w-80 h-32 px-5 mb-4 mt-10">
                Nous ajustons la hauteur de la selle, la longueur des
                manivelles, la position du guidon, et bien plus encore.
              </div>
            </div>

            {/* Section 3: Conseils Personnalisés */}
            <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
              <h4 className="lg:text-2xl text-2xl mb-4 font-StrawBold">
                Conseils Personnalisés
              </h4>

              <div className="w-72 rounded-full h-72 lg:w-64 lg:h-64 overflow-hidden relative">
                <div className="bg-violet-700 bg-opacity-30 absolute w-full h-full"></div>
                <img
                  src="/ajust.png"
                  alt="Conseils Personnalisés"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:text-md text-center w-80 h-32 px-5 mb-4 mt-10">
                À la fin de la séance, nous vous donnons des conseils pour
                améliorer votre position et maximiser vos performances.
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col lg:items-start items-center justify-center lg:mt-40 mt-5 mb-20">
          <img
            src="bike2.png"
            className="lg:w-100 w-4/5 lg:px-0 rounded-tl-3xl rounded-br-3xl lg:mr-20 mt-20 lg:mt-0 grayscale
          "
          ></img>
          <div className=" text-sky-900 z-20 items-center   lg:w-2/5  flex flex-col ">
            <h2 className="xl:text-3xl text-violet-900 lg:text-2xl text-3xl mb-10 lg:translate-x-36 lg:mt-10 mt-10  font-StrawBold w-fit bg-slate-50 py-2 px-10 rounded-full   ">
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
