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
    <div className="nav-container flex justify-around items-center">
      <h1 className="">OV</h1>
      <div
        className="burger-menu flex flex-col justify-between h-6 cursor-pointer d-md-none"
        onClick={toggleMenu}>
        <span className={`menu-bar ${burgerStyle}`}></span>
        <span className={`menu-bar ${burgerStyle}`}></span>
        <span className={`menu-bar ${burgerStyle}`}></span>
      </div>
      <ul
        className={`${menuVisibilty} menu-list `}>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Nav;
