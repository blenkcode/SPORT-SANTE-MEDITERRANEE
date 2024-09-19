"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { toggleMenu } from "../../store/uiSlice";

const BurgerMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isMenuOpen = useSelector((state: RootState) => state.ui.navbar);

  const handleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="fixed top-5 right-5 lg:top-50 lg:right-10 z-50 bg-zinc-200 bg-opacity-50 rounded-full w-16 h-16 flex items-center justify-center lg:-top-40">
        <div onClick={handleMenu} className="flex flex-col cursor-pointer">
          <span
            className={`w-10  h-1.5 bg-sky-900  rounded transition-all duration-300 ease-in-out ${
              isMenuOpen ? "transform rotate-45 translate-y-3 bg-sky-900" : ""
            }`}
          ></span>
          <span
            className={`w-10  h-1.5 bg-sky-900  rounded transition-all mt-2 duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-10  h-1.5 bg-sky-900  rounded transition-all mt-2 duration-300 ease-in-out ${
              isMenuOpen
                ? "transform -rotate-45 lg:-translate-y-4 -translate-y-4 bg-sky-900"
                : ""
            }`}
          ></span>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
