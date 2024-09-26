import React from "react";
import Link from "next/link";

const footer = () => {
  return (
    <div className="w-full h-fit py-10 px-10 bg-sky-900 flex items-center justify-center font-Straw">
      <div className="flex lg:flex-row flex-col justify-center items-center ">
        <ul className="text-md w-full ">
          <li>Lundi - Vendredi : 08:30-19h00</li>
          <li>Samedi - Dimanche : Fermé</li>
          <li className="mt-10 ">
            {" "}
            <u>Trouvez nous ici :</u> 67 Avenue de la Méditerranée Résidence
            Phocéa B, 34340 Marseillan
          </li>
        </ul>
        <ul className="text-md w-full  flex items-center flex-col mt-10 lg:mt-0 ">
          <li className="flex items-center">
            <img src="/logomain.png" className="w-14  rounded-full"></img>
          </li>
          <li className="mt-5">Sport - Santé Méditerranée 2024</li>

          <li className="mt-5">
            {" "}
            WebSite by{" "}
            <Link
              href="https://www.valentin-mor.com/"
              className="text-sky-300 hover:text-sky-200"
            >
              Valentin MOR
            </Link>
          </li>
        </ul>

        <div className="w-full text-center mt-10 lg:mt-0 ">
          <div className="lg:w-1/2 h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.7935556159678!2d3.5453398999999997!3d43.31858090000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b13b33383c2179%3A0xa6af9bbf797122fb!2sCabinet%20de%20Kin%C3%A9sith%C3%A9rapie%20et%20Ost%C3%A9opathie%20-%20Marseillan%20Plage%20-%20LARIVIERE%20Martin%2C%20PORTAL%20Cyril%2C%20P%C3%89PIN%20Laureen%2C%20GBICK%20Ewen!5e0!3m2!1sfr!2sfr!4v1726679541118!5m2!1sfr!2sfr"
              className="w-full  rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
