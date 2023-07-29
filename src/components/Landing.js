import React from 'react';
import { useTheme } from '../context/useTheme';
const Landing = () => {
  const { scrollPosition } = useTheme();

  return (
    <div className="text-center bg-blue-900/10 hero-bg overflow-hidden justify-center min-h-[calc(100vh_-_100px)] items-center flex flex-col lg:gap-0 gap-4">
      <h1
        style={{ transform: `translateX(${scrollPosition * 0.5}px)` }}
        className="bg-gradient-to-r bg-clip-text text-transparent lg:text-4xl font-bold from-slate-200 to-slate-400 text-xl md:text-2xl">
        A HACKATHON LIKE NEVER BEFORE
      </h1>
      <svg viewBox="0 0 1000 200">
        <Title />
        <text
          className="text-[13rem] md:text-[11rem] lg:text-9xl"
          id="paint0_linear_3_14"
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle">
          HACK VERSE 2.0
        </text>
      </svg>
      <h1
        style={{ transform: `translateX(-${scrollPosition * 0.5}px)` }}
        className="bg-gradient-to-r bg-clip-text text-transparent lowercase text-gray-300 font-bold lg:text-4xl text-sm md:text-4xl from-slate-200 to-slate-400">
        Largest Web3 Hackathon in South India
      </h1>
      <p className="mt-10">
        <button
          className="apply-button"
          data-hackathon-slug={process.env.REACT_APP_DEVFOLIO_SLUGID}
          data-button-theme="dark-inverted"
          style={{ height: 44, width: 312 }}></button>
      </p>
    </div>
  );
};

export default Landing;

const Title = () => {
  return (
    <svg
      id="title"
      width="0"
      height="0"
      viewBox="0 0 0 0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="paint0_linear_3_14"
          x1="3"
          y1="37.0001"
          x2="585"
          y2="37.0001"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#000000" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
