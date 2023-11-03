import React from "react";
import logo from "../../assets/img/logo.png";

export const Footer = () => {
  return (
    <div className="px-14 pt-12 pb-5 bg-main text-center text-white">
      <hr className="pb-6" />
      {/* <div className="w-fit mx-auto px-5 py-2 font-bold border-b border-secondary shadow shadow-secondary">
        <span className="text-secondary">Angga's</span>
        <span> Movies</span>
      </div> */}
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <div>presented to : </div>
          <img src={logo} alt="logo" className="w-6" />
          <div className="text-[#723571] font-semibold">Challenge Chapter 4</div>
        </div>
        <div>
          Copyright &copy; 2023 | <span className="text-secondary">Heroisme</span> Movies
        </div>
      </div>
    </div>
  );
};
