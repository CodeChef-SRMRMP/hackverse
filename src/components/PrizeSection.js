import React from 'react';

const PrizeSection = () => {
  return (
    <div className="m-10 mx-5 md:mx-10 lg:mx-20">
      <h1 className="dark:text-white text-5xl">Prizes</h1>
      <div className="bg-black/60 mt-5 flex flex-wrap gap-5 items-end justify-between px-20 backdrop-blur-xl rounded-md text-white p-10">
        <div className="flex justify-between w-full md:w-fit items-center md:items-start space-x-5 lg:space-x-0 md:flex-col">
          <div className="-space-y-3 ">
            <p className="text-6xl">
              1<span className="text-2xl">st</span>
            </p>
            <p className="text-2xl">Place</p>
          </div>
          <div className="relative animate-pulse w-fit flex items-center justify-center">
            <img
              src={require('../assets/images/gold-prize.png')}
              className="w-36"
              alt=""
            />
            <div className="absolute -space-y-3 drop-shadow-xl">
              <p className="text-7xl font-semibold">15k</p>
              <p className="text-2xl">INR</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-fit items-center md:items-start space-x-5 lg:space-x-0 md:flex-col">
          <div className="-space-y-3">
            <p className="text-6xl">
              2<span className="text-2xl">nd</span>
            </p>
            <p className="text-2xl">Place</p>
          </div>
          <div className="animate-pulse relative w-fit flex items-center justify-center">
            <img
              src={require('../assets/images/silver-prize.png')}
              className="w-36"
              alt=""
            />
            <div className="absolute -space-y-3 drop-shadow-xl">
              <p className="text-7xl font-semibold">10k</p>
              <p className="text-2xl">INR</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-fit items-center md:items-start space-x-5 lg:space-x-0 md:flex-col">
          <div className="-space-y-3">
            <p className="text-6xl">
              3<span className="text-2xl">rd</span>
            </p>
            <p className="text-2xl">Place</p>
          </div>
          <div className="animate-pulse relative w-fit flex items-center justify-center">
            <img
              src={require('../assets/images/bronze-prize.png')}
              className="w-36"
              alt=""
            />
            <div className="absolute -space-y-3 drop-shadow-xl">
              <p className="text-7xl font-semibold">5k</p>
              <p className="text-2xl">INR</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full md:w-fit md:items-start space-x-5 lg:space-x-0 md:flex-col">
          <div className="-space-y-2">
            <p className="text-2xl">+ Sponsor</p>
            <p className="text-2xl">Track Prize</p>
          </div>
          <div className=" animate-pulse relative w-fit flex items-center justify-center">
            <img
              src={require('../assets/images/sponsor-prize.png')}
              className="w-36"
              alt=""
            />
            <div className="absolute -space-y-3 drop-shadow-xl">
              <p className="text-7xl font-semibold">100k</p>
              <p className="text-2xl">INR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeSection;
