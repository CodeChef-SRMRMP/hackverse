import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

// Auto Scroll for the content

const WhySponsorUs = () => {
  const message =
    'Hey Prayasu, We would like to sponsor your event. Please get back to us. Thanks!';
  return (
    <div className="m-10 mx-5 md:mx-10 space-y-10 lg:space-y-0 lg:mx-20 dark:text-white flex flex-col lg:flex-row justify-between items-stretch">
      <div className="w-full lg:w-1/3 space-y-3">
        <h1 className="text-black dark:text-white ml-1 font-bold text-6xl">
          WHY SPONSOR US
        </h1>
        <h3 className="ml-2 text-gray-200 text-xl">
          HELP US MAKE HACKVERSE BIGGER AND BETTER
        </h3>
        <p className="ml-2 text-sm text-gray-300"></p>
        <div className="ml-2 space-x-2">
          <button className="bg-gray-500 px-4 py-2 rounded-lg active:scale-75 ease-out duration-100">
            <a
              rel="noreferrer"
              href={
                'https://twitter.com/messages/compose?recipient_id=1355157967650217991&text=' +
                message
              }
              target="_blank">
              Sponsor Us
            </a>
          </button>
          <a
            href={require('../assets/SponsorDeck.pdf')}
            target="_blank"
            rel="noreferrer">
            <button className="bg-red-500 px-4 py-2 rounded-lg active:scale-75 ease-out duration-100">
              View Brochure
            </button>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-[#202021]/50 backdrop-blur-3xl rounded-lg p-5">
        <h1 className="text-xl mb-3">Our Previous Events</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          modules={[Navigation, EffectFade, Autoplay]}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}>
          <SwiperSlide>
            <img
              src={require('../assets/images/previousEvents/buidlers-connect.png')}
              className="h-42"
              alt=""
            />
            <p className="text-center text-white bg-black/40 p-2 text-xl w-full absolute bottom-0">
              Builder's Connect
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../assets/images/previousEvents/demistifying-web3.png')}
              className="h-42"
              alt=""
            />
            <p className="text-center text-white bg-black/40 p-2 text-xl w-full absolute bottom-0">
              Demistifying Web3
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require('../assets/images/previousEvents/texplore.png')}
              className="h-42"
              alt=""
            />
            <p className="text-center text-white bg-black/40 p-2 text-xl w-full absolute bottom-0">
              Texplore
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WhySponsorUs;
