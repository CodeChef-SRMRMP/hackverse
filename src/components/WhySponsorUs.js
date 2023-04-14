import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

// Auto Scroll for the content

const WhySponsorUs = () => {
  const message =
    'Hey Prayasu, We would like to sponsor your event. Please get back to us. Thanks!';
  return (
    <div className="m-10 mx-5 md:mx-10 space-y-10 lg:space-x-10 lg:space-y-0 lg:mx-20 dark:text-white flex flex-col lg:flex-row justify-between items-stretch">
      <div className="w-full flex flex-col justify-between space-y-3">
        <h1 className="text-black dark:text-white ml-1 font-bold text-6xl">
          WHY SPONSOR US
        </h1>
        <h3 className="ml-2 text-gray-200 text-sm text-justify">
          The main motto of HACKVERSE is to build a regular culture of
          hackathons at a bigger scale not only in SRM IST Ramapuram but all
          over Chennai. Which in return would give us youth with better
          problem-solving skills. As we are going to see a pan-platform where
          people will be joining for participation, it would be creating an
          irresistible platform for any market enthusiast business promoter.
          More than advertisements we make our sponsors our integrate speakers
          of the event, wherein they can easily grab the young minds via their
          services/products using enlightenment techniques. Sponsors are going
          to put forward their brand name or brand products in front of a public
          who never heard of it or will be able to make a better perspective of
          it. This will be an extraordinary moment because this event will be
          creating an atmosphere of healthy competition. So, in this vital
          moment, a marketer would have an easy game of making an emotional
          connection with the probable future customer. At any point in the
          hour- every aspect will agree & say we’re going to be a high-profile &
          high- fame event. Any brand joining hands with us will make a positive
          perspective on customers for that brand. Image building is the vital
          key for any brand to build. Our event will provide a calm perspective
          with aggressive success growth for every brand joining us.
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
    </div>
  );
};

export default WhySponsorUs;
