import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] w-full h-lvh">
      <div className="bg-[url('/bc.jpg')] bg-fixed w-full bg-cover h-2/3 text-sky-50 font-bold text-7xl  items-center justify-center font-Manrope flex flex-col">
        <div className="mb-10">SPORT - SANTÉ MEDITERRANÉE</div>
        <Link
          href="https://www.doctolib.fr/osteopathe/marseillan/cyril-portal"
          className="text-xl text-sky-50 bg-sky-600 py-2 px-4 rounded-full flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50 transition-colors"
        >
          PRENDRE RENDEZ-VOUS
          <FontAwesomeIcon className="ml-3 text-xl" icon={faCalendar} />
        </Link>
        <div className="text-xl mt-8 text-sky-50 bg-sky-600 py-2 px-4 rounded-full flex font-thin justify-center items-center cursor-pointer hover:text-sky-600 hover:bg-sky-50 transition-colors">
          09 75 96 52 30
          <FontAwesomeIcon className="ml-3 text-xl" icon={faPhone} />
        </div>
      </div>
      <div className="text-5xl h-1/3 bg-sky-50 text-sky-900 px-96 flex flex-col items-center justify-start ">
        <h2 className="mt-10">Notre équipe à votre écoute</h2>
        <p className="text-xl mt-10">
          Nos soignants Kinésithérapeuthes et Ostéopathes agréés par la clinique
          du coureur répondent à vos besoins avec bienveillance. Notre sommes là
          pour vous aider à mieux comprendre votre situation et trouver des
          solutions durables pour gérer votre douleur, atteindre vos objectifs,
          et améliorer votre qualité de vie.{" "}
        </p>
      </div>
      <div className="flex items-center bg-red-50">
        <div className="text-5xl h-fit text-sky-900 bg-sky-600 py-20 grid grid-cols-1 lg:grid-cols-4  w-full">
          <div className="w-80 flex flex-col text-lg bg-sky-100 items-center rounded-lg pb-20 relative">
            <h3 className="text-2xl font-bold py-3">Kinésithérapie du sport</h3>
            <p className="absolute bottom-0 bg-sky-100 p-5">
              Analyse de course, certifié par la clinique du coureur,
              préventions et rétablissement post blessure.{" "}
            </p>
            <img src="/card4.png" className=""></img>
          </div>
          <div className="w-80 flex flex-col text-lg bg-sky-100 items-center rounded-lg pb-20 relative">
            <h3 className="text-2xl font-bold py-3">Kinésithérapie du sport</h3>
            <p className="absolute bottom-0 bg-sky-100 p-5">
              Analyse de course, certifié par la clinique du coureur,
              préventions et rétablissement post blessure.{" "}
            </p>
            <img src="/card4.png" className=""></img>
          </div>
          <div className="w-80 flex flex-col text-lg bg-sky-100 items-center rounded-lg pb-20 relative">
            <h3 className="text-2xl font-bold py-3">Kinésithérapie du sport</h3>
            <p className="absolute bottom-0 bg-sky-100 p-5">
              Analyse de course, certifié par la clinique du coureur,
              préventions et rétablissement post blessure.{" "}
            </p>
            <img src="/card4.png" className=""></img>
          </div>
          <div className="w-80 flex flex-col text-lg bg-sky-100 items-center rounded-lg pb-20 relative">
            <h3 className="text-2xl font-bold py-3">Kinésithérapie du sport</h3>
            <p className="absolute bottom-0 bg-sky-100 p-5">
              Analyse de course, certifié par la clinique du coureur,
              préventions et rétablissement post blessure.{" "}
            </p>
            <img src="/card4.png" className=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
