import React from 'react';
import Marquee from 'react-fast-marquee';

const sponsors = [
  require('../assets/images/sponsors/gold/koinbx.png'),
  require('../assets/images/sponsors/silver/devfolio.png'),
  require('../assets/images/sponsors/silver/replit.png'),
  require('../assets/images/sponsors/silver/solana.png'),
  require('../assets/images/sponsors/silver/filecoin.png'),
];

const SponsorsCard = () => {
  return (
    <>
      <p className="text-black dark:text-white ml-5 md:ml-10 lg:ml-20 font-bold text-3xl font-koulen pt-10">
        Sponsorship
      </p>
      <div className="m-4 rounded-lg bg-black/60 backdrop-blur-3xl mx-5 md:mx-10 lg:mx-20 p-5 py-7 text-white dark:text-black dark:shadow-gray-500">
        <Marquee pauseOnHover gradient={false} speed={200}>
          <div className="flex items-center space-x-20 mx-10">
            {sponsors.map((sponsor, i) => (
              <img
                key={i}
                className="h-20 object-cover object-center"
                src={sponsor}
                alt=""
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default SponsorsCard;
