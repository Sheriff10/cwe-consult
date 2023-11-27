import React, { useContext } from "react";
import logo from "../../assets/images/cwe-logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "../reusables";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AppContext } from "../../contexts/AppContext";

function Nav() {
  const navLinks = ["about", "expertise"];
  const { toggleNav } = useContext(AppContext);
  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-xl text-white fixed top-0 w-full z-[999]">
      <nav className="container mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="logo flex items-center gap-0.5">
          <img src={logo} alt="CWE Logo" className="w-10" />{" "}
          <span className="font-bold text-lg ">CWEmbassy</span>
        </div>
        <div className="nav-links hidden md:block">
          <ul className="flex items-center gap-4">
            {navLinks.map((navLink) => (
              <li key={navLink}>
                <ScrollLink
                  to={navLink}
                  smooth={true}
                  className="capitalize cursor-pointer hover:text-primary"
                >
                  {navLink}
                </ScrollLink>
              </li>
            ))}
            <ScrollLink to="contact" smooth={true}>
              <Button
                text={"Contact"}
                bgColor={"bg-[#a13523]"}
                hoverColor={"hover:bg-[#5c241c]"}
                textColor={"text-[#fff]"}
              />
            </ScrollLink>
          </ul>
        </div>

        <button
          onClick={toggleNav}
          className="group bg-primary p-2 rounded text-lg font-semibold block md:hidden hover:bg-white transition-all duration-500"
        >
          <HiOutlineMenuAlt3 className="text-white group-hover:text-primary transition-all duration-500" />{" "}
        </button>
      </nav>
    </header>
  );
}

export default Nav;
