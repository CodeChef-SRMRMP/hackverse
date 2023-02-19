import { Drawer } from 'antd';
import React, { useState } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useTheme } from '../context/useTheme';

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  const [openDrawer, setOpenDrawer] = useState(false);

  const contents = ['SESSIONS', 'SPONSORS', 'JOIN US', 'LEADER BOARD'];

  return (
    <>
      <Drawer
        title="Contents"
        style={{
          fontFamily: 'Koulen',
        }}
        closeIcon={<IoClose />}
        placement="right"
        size={378}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        extra={
          <div>
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
        }
        footer={
          <div>
            <p className="text-center text-gray-400">©️ HACK VERSE</p>
          </div>
        }>
        <div className="space-y-5">
          {contents.map((content, key) => {
            return (
              <p
                key={key}
                className="navButton"
                onClick={() => setOpenDrawer(!openDrawer)}>
                {content}
              </p>
            );
          })}
        </div>
      </Drawer>
      <div className="flex bg-white justify-between border-b duration-1000 transition-all ease-out p-3 px-10 items-center dark:bg-black">
        <h1 className="navButton text-3xl">
          {darkMode ? (
            <img
              src={require('../assets/images/logo-light.png')}
              className="h-20"
              alt=""
            />
          ) : (
            <img
              src={require('../assets/images/logo-dark.png')}
              className="h-20"
              alt=""
            />
          )}
        </h1>

        <div className="space-x-5 items-center hidden md:inline-flex">
          {contents.map((content, key) => {
            return (
              <p key={key} className="navButton">
                {content}
              </p>
            );
          })}
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
        <GiHamburgerMenu
          className="navButton md:hidden"
          onClick={() => setOpenDrawer(!openDrawer)}
        />
      </div>
    </>
  );
};

export default Header;
