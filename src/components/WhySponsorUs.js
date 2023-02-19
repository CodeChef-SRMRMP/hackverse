import React from 'react';

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
        <p className="ml-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nibh nulla, vulputate fringilla tempor vitae, eleifend eu risus. Ut
          interdum eget nisi non volutpat. Vivamus nec dui quis metus commodo
          fringilla. Integer malesuada neque at diam efficitur, id venenatis
          felis vulputate. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </p>
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
          <button className="bg-red-500 px-4 py-2 rounded-lg active:scale-75 ease-out duration-100">
            View Brochure
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-[#202021]/50 backdrop-blur-3xl rounded-lg p-5">
        <h1 className="text-xl">Our Previous Events</h1>
      </div>
    </div>
  );
};

export default WhySponsorUs;
