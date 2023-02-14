import React from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "../context/useTheme";

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="flex bg-white justify-between duration-1000 transition-all ease-out p-3 px-10 items-center dark:bg-black">
      <h1 className="navButton text-3xl">HACK VERSE</h1>

      <div className="flex space-x-5 items-center">
        <p className="navButton">SESSIONS</p>
        <p className="navButton">SPONSORS</p>
        <p className="navButton">JOIN US</p>
        <p className="navButton">LEADER BOARD</p>
        {darkMode ? (
          <BsSunFill
            className="navButton"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <BsMoonFill
            className="navButton"
            onClick={() => setDarkMode(!darkMode)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
