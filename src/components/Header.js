import React from "react";

const Header = () => {
  return (
    <div className="flex bg-white justify-between p-3 px-10 items-center dark:bg-black">
      <h1 className="navButton text-3xl">HACK VERSE</h1>

      <div className="flex space-x-5 items-center">
        <p className="navButton">SESSIONS</p>
        <p className="navButton">SPONSORS</p>
        <p className="navButton">JOIN US</p>
        <p className="navButton">LEADER BOARD</p>
      </div>
    </div>
  );
};

export default Header;
