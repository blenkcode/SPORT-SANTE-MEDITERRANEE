import React from "react";

const osteopathie = () => {
  return (
    <div className="lg:h-lvh h-auto min-h-lvh w-full flex flex-col">
      {" "}
      <div className="bg-[url('/bc.jpg')] bg-center lg:bg-fixed bg-scroll w-full bg-cover lg:h-3/5 h-lvh text-sky-50 ">
        <div className="w-full h-full items-center justify-center font-Straw flex flex-col bg-gradient-to-r from-sky-700/80 to-sky-700/0">
          <div className="items-center flex  flex-col justify-center">
            <img
              src="/logomain.png"
              className="rounded-full lg:w-0 w-2/5 mb-10"
            ></img>
            <div className="mb-10 lg:mt-10 mt-0 flex flex-col justify-start items-center font-Manrope">
              <h1 className="ease-in-out duration-title transition-all font-extrabold flex lg:flex-row flex-col">
                <div className="bg-zinc-700 lg:bg-opacity-25 bg-opacity-0 px-10 lg:px-5 py-8 rounded-full items-center justify-center flex flex-col  sm:flex-row font-Straw 2xl:text-6xl lg:text-5xl sm:text-3xl text-4xl ">
                  Ostéopathie
                </div>
              </h1>
            </div>
            <h2 className="lg:font-extrabold font-Straw transition-all  ease-in-out delay-500 duration-1000 font-normal   flex sm:flex-row flex-col sm:text-3xl  2xl:text-3xl xl:text-2xl lg:text-2xl text-2xl 2xl:mt-0">
              {" "}
              <span className="lg:mr-3 mr-0 flex flex-col items-center lg:flex-row">
                Kinésithérapie &{" "}
              </span>
              Ostéopathie du sport
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default osteopathie;
