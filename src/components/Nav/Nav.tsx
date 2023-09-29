import { useState } from "react";
import "./nav.css";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [burgerStyle, setBurgerStyle] = useState("");
  const [menuVisibilty, setMenuVisibility] = useState("hidden");

  const toggleMenu = () => {
    if (isMenuOpen) {
      setBurgerStyle("burger clicked");
      setMenuVisibility("visible");
    } else {
      setBurgerStyle("burger unclicked");
      setMenuVisibility("hidden");
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container flex justify-around items-center bg-slate-400">
      <h1 className="">Obeda Velonjatovo</h1>
      <div
        className="burger-menu flex flex-col justify-between h-6 cursor-pointer"
        onClick={toggleMenu}>
        <span className={`menu-bar ${burgerStyle}`}></span>
        <span className={`menu-bar ${burgerStyle}`}></span>
        <span className={`menu-bar ${burgerStyle}`}></span>
      </div>
      <ul
        className={`${menuVisibilty} bg-white list-none w-32 h-36 space-y-3 p-2 absolute right-12 top-20 shadow-md rounded-lg`}>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Nav;
