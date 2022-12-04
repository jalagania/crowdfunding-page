import { useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import close from "../images/icon-close-menu.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="mx-auto flex max-w-[75%] items-center justify-between pt-16 phone:max-w-[90%]">
      <img src={logo} alt="logo" />
      <nav className="">
        <img
          className={`hidden phone:block ${showMenu ? "phone:hidden" : ""}`}
          src={menu}
          alt="menu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <img
          className={`hidden phone:block ${!showMenu ? "phone:hidden" : ""}`}
          src={close}
          alt="close"
          onClick={() => setShowMenu(!showMenu)}
        />
        <ul
          className={`${
            !showMenu ? "phone:hidden" : ""
          } flex gap-12 text-white phone:absolute phone:right-[30px] phone:top-[80px] phone:w-[85%] phone:flex-col phone:gap-0 phone:rounded-xl phone:bg-white phone:font-bold phone:text-black phone:shadow-2xl`}
        >
          <li className="phone:p-8">
            <a href="#">About</a>
          </li>
          <li className="phone:border-y phone:border-solid phone:border-gray-200 phone:p-8">
            <a href="#">Discover</a>
          </li>
          <li className="phone:p-8">
            <a href="#">Get Started</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
