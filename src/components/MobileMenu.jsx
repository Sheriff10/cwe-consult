import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-scroll";

function MobileMenu() {
  const { isNavOpen, toggleNav } = useContext(AppContext);

  return (
    <div
      className={`w-full h-screen bg-black bg-opacity-50 fixed top-0  z-[9999] transition-all duration-300 ${
        isNavOpen ? "right-0" : "right-[-200%]"
      }`}
    >
      <button
        onClick={toggleNav}
        className="text-white absolute top-5 right-5 group bg-primary p-2 rounded text-lg font-semibold block md:hidden hover:bg-white transition-all duration-500"
      >
        <LiaTimesSolid className="text-white group-hover:text-primary transition-all duration-500" />
      </button>
      <div className="h-full w-full max-w-xs bg-black flex flex-col justify-center items-center float-right p-8">
        <Link
          to="about"
          smooth={true}
          className="text-white text-xl py-2 cursor-pointer hover:text-primary"
          onClick={toggleNav}
        >
          About
        </Link>
        <Link
          to="expertise"
          smooth={true}
          className="text-white text-xl py-2 cursor-pointer hover:text-primary"
          onClick={toggleNav}
        >
          Expertise
        </Link>
        <Link
          to="contact"
          smooth={true}
          className="text-white text-xl py-2 cursor-pointer hover:text-primary"
          onClick={toggleNav}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
