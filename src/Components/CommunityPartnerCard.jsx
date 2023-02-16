import React, { useState, useEffect, useRef } from 'react';
import GDSC from '../assets/gdsc.png';
import Kanalabs from '../assets/kanalabs.png';
import Koii from '../assets/koii.png';

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
  const images = CommunityPartnersImages;
  const windowWidth = window.innerWidth;
  const numberOfSlides =
    windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : windowWidth < 1280 ? 3 : 4;
  const interval = 5000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  useEffect(() => {
    slideRef.current.style.transition = 'transform 0.5s ease-out';
    slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === images.length) {
        setCurrentIndex(0);
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = `translateX(0)`;
      }
    };

    slideRef.current.addEventListener('transitionend', handleTransitionEnd);

    return () =>
      slideRef.current.removeEventListener(
        'transitionend',
        handleTransitionEnd
      );
  }, [currentIndex, images.length]);

  return (
    <div className="w-screen relative  overflow-hidden px-5 md:px-10 lg:px-20">
      <h1 className="text-black text-center dark:text-white  font-bold text-3xl font-koulen mt-10 ">
        Community Partners
      </h1>
      <div
        ref={slideRef}
        className="flex py-5  scrollbar-hide duration-200 transition-all max-w-screen ">
        {CommunityPartnersImages &&
          CommunityPartnersImages.map(({ image }, i) => (
            <div
              key={i}
              alt={`slide-${i}`}
              className={`bg-[#202021] backdrop-blur-xl transition-all   duration-[1000ms] flex items-center justify-center gap-5 flex-shrink-0 w-full rounded-lg h-[12rem] px-10 md:h-[13rem]  lg:h-[15rem] opacity-0 ${
                currentIndex === i && 'opacity-100'
              }`}>
              {/* Mobile */}
              <div className="md:hidden flex items-center justify-center ">
                <img
                  src={image}
                  alt="community partner"
                  className="w-[100%] h-[100%] object-fit"
                />
              </div>
              {/* Tablet */}

              <div className="hidden md:w-full mx-5 gap-10 md:grid md:grid-cols-2 lg:hidden">
                <div className="w-full flex items-center justify-center ">
                  <img
                    src={image}
                    alt="community partner"
                    className=" object-fit"
                  />
                </div>
                <div className="w-full flex items-center justify-center ">
                  <img
                    src={image}
                    alt="community partner"
                    className=" object-fit "
                  />
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden lg:w-full mx-5 gap-10 lg:grid lg:grid-cols-3 xl:hidden">
                <div className="w-full flex items-center justify-center ">
                  <img
                    src={image}
                    alt="community partner"
                    className=" object-fit"
                  />
                </div>
                <div className="w-full flex items-center justify-center ">
                  <img
                    src={image}
                    alt="community partner"
                    className=" object-fit "
                  />
                </div>
                <div className="w-full flex items-center justify-center ">
                  <img
                    src={image}
                    alt="community partner"
                    className=" object-fit "
                  />
                </div>
              </div>
              {/* Large Desktop */}
              <div className="hidden xl:w-full mx-5 gap-10 xl:grid xl:grid-cols-4 ">
                <div className="w-full flex items-center justify-center ">
                  <img
                    src={image}
                    alt="community partner"
                    className=" object-fit"
                  />
                </div>
                <div className="w-full flex items-center justify-center ">
                  <img
                    src={image}
                    alt="community partner"
                    className=" object-fit "
                  />
                </div>
                <div className="w-full flex items-center justify-center ">
                  <img
                    src={image}
                    alt="community partner"
                    className=" object-fit "
                  />
                </div>
                <div className="w-full flex items-center justify-center ">
                  <img
                    src={image}
                    alt="community partner"
                    className=" object-fit "
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex items-center mt-3 absolute inset-x-0 bottom-9  justify-center gap-3">
        {CommunityPartnersImages.map((num, i) => (
          <div
            onClick={() => setCurrentIndex(i)}
            key={i * 100}
            className={`cursor-pointer w-2 h-2 md:w-[0.6rem] md:h-[0.6rem] transition-all  duration-[800ms] rounded-full bg-gray-400/60 ${
              i === currentIndex && 'bg-gray-50'
            }`}></div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPartnerCard;
