import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => (images[item.replace('./', '')] = r(item)));
  return images;
}

const diamond = importAll(
  require.context(
    '../assets/images/sponsors/diamond/',
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const gold = importAll(
  require.context(
    '../assets/images/sponsors/gold/',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const silver = importAll(
  require.context(
    '../assets/images/sponsors/silver/',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const web3 = importAll(
  require.context(
    '../assets/images/sponsors/web3eco/',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const Sponsors = ({ sponsorsRef }) => {
  return (
    <div ref={sponsorsRef} className="m-10 mx-5 md:mx-10 lg:mx-20">
      <h1 className="dark:text-white text-5xl text-left">Our Sponsors</h1>
      <div className="bg-black/60 mt-5 p-10 backdrop-blur-xl px-10 lg:px-20 rounded-md">
        <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6 items-start justify-center md:justify-between lg:justify-evenly rounded-md text-white">
          <div className="-space-y-3 ">
            <p className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
              Diamond Sponsors
            </p>
          </div>
          {Object.values(diamond).map((sponsor, index) => (
            <div key={index} className="w-24  h-24">
              <img
                src={sponsor}
                alt={index}
                className="scale-[200%] object-cover h-20 mx-auto object-center rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black/60 mt-5 p-10 backdrop-blur-xl px-10 lg:px-20 rounded-md">
        <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6 items-start justify-center md:justify-between lg:justify-evenly rounded-md text-white">
          <div className="-space-y-3 ">
            <p className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
              Golden Sponsors
            </p>
          </div>
          {Object.values(gold).map((sponsor, index) => (
            <div key={index} className="">
              <img
                src={sponsor}
                alt={index}
                className="w-full h-10 object-cover md:h-20 object-center rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black/60 mt-5 p-10 backdrop-blur-xl px-10 lg:px-20 rounded-md">
        <div className="grid gap-4 w-full md:grid-cols-4 lg:grid-cols-6 items-center justify-center md:justify-between lg:justify-evenly rounded-md text-white">
          <div className="-space-y-3 ">
            <p className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
              Silver Sponsors
            </p>
          </div>
          {Object.values(silver).map((sponsor, index) => (
            <div key={index} className="">
              <img
                loading="lazy"
                src={sponsor}
                alt={index}
                className="h-20  w-48 mx-auto object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black/60 mt-5 p-10 backdrop-blur-xl px-10 lg:px-20 rounded-md">
        <div className="grid gap-4 w-full md:grid-cols-4 lg:grid-cols-6 items-center justify-center md:justify-between lg:justify-evenly rounded-md text-white">
          <div className="-space-y-3 ">
            <p className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
              Web3 Ecosystem Partner
            </p>
          </div>
          {Object.values(web3).map((sponsor, index) => (
            <div key={index} className="">
              <img
                loading="lazy"
                src={sponsor}
                alt={index}
                className="h-20 scale-[200%] w-48 mx-auto object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
