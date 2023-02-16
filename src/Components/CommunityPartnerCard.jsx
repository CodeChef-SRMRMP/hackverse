import React, { useState, useEffect } from 'react';
import GDSC from '../assets/gdsc.png';
import Kanalabs from '../assets/kanalabs.png';
import Koii from '../assets/koii.png';
import { Transition } from '@headlessui/react';

const CommunityPartnersImages = [
  {
    id: 1,
    image: GDSC,
  },
  {
    id: 2,
    image: Kanalabs,
  },
  {
    id: 3,
    image: Koii,
  },
];

const CommunityPartnerCard = () => {
  const [current, setCurrent] = useState(0);

  const TotalSponsors = CommunityPartnersImages.length;

  const nextSlide = () => {
    setCurrent(current === TotalSponsors - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="w-screen relative bg-black ">
      <h1 className="text-black text-center dark:text-white ml-5 md:ml-10 lg:ml-20 font-bold text-3xl font-koulen mt-10 ">
        Community Partners
      </h1>
      <div className="flex py-4 px-4 md:px-8 lg:px-12 gap-5 overflow-scroll scrollbar-hide relative">
        {CommunityPartnersImages &&
          CommunityPartnersImages.map(({ image }, i) => (
            <Transition
              show={i === current}
              enter="transition ease-in-out duration-3000 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-3000 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
              key={i * 100}
              className={`bg-[#202021] backdrop-blur-xl transition-all  flex items-center justify-center duration-[1000ms] animate-scroll-hide  flex-shrink-0 w-full ${
                i === current ? '' : 'opacity-0 '
              } rounded-lg h-[12rem] md:h-[13rem] lg:h-[15rem] `}>
              <img
                src={image}
                alt="community partner"
                className="w-1/2 h-1/2 object-fit"
              />
            </Transition>
          ))}
      </div>
      <div className="flex items-center mt-3 absolute inset-x-0 bottom-9  justify-center gap-3">
        {CommunityPartnersImages.map((num, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={i * 100}
            className={`cursor-pointer w-2 h-2 md:w-[0.6rem] md:h-[0.6rem] transition-all  duration-[800ms] rounded-full bg-gray-400/60 ${
              i === current && 'bg-gray-50'
            }`}></div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPartnerCard;
