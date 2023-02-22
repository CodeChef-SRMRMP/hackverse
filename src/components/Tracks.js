import React, { useState } from 'react';

const tracks = [
  {
    name: 'Healthcare',
    desc: 'Description for Healthcare',
  },
  {
    name: 'Agriculture',
    desc: 'Description for Agriculture',
  },
  {
    name: 'Environment',
    desc: 'Description for Environment',
  },
  {
    name: 'defi',
    desc: 'Description for defi',
  },
  {
    name: 'NFT',
    desc: 'Description for NFT',
  },
  {
    name: 'Blockchain',
    desc: 'Description for Blockchain',
  },
  {
    name: 'AI',
    desc: 'Description for AI',
  },
  {
    name: 'metaverse',
    desc: 'Description for metaverse',
  },
  {
    name: 'dev tools',
    desc: 'Description for dev tools',
  },
  {
    name: 'open innovation',
    desc: 'Description for open innovation',
  },
];

const Tracks = () => {
  const [description, setDescription] = useState(
    'General description for all tracks'
  );
  return (
    <div className="m-10 mx-5 md:mx-10 lg:mx-20">
      <h1 className="dark:text-white text-5xl text-center">Tracks</h1>
      <p className="text-white font-bold mt-10 mx-auto w-full md:w-1/3 text-center bg-red-500/30 backdrop-blur-md px-3 py-3 text-lg rounded-md">
        {description}
      </p>
      <div className="bg-black/60 mt-5 p-10 backdrop-blur-xl px-10 lg:px-20">
        <div className="flex flex-wrap gap-5 items-end justify-center md:justify-between lg:justify-evenly rounded-md text-white">
          {tracks?.map(({ name, desc }) => {
            return (
              <h1
                onMouseEnter={() => {
                  setDescription(desc);
                }}
                onMouseLeave={() =>
                  setDescription('General description for all tracks')
                }
                className="hover:bg-yellow-600 cursor-pointer border-2 text-center px-3 py-2 text-4xl rounded-xl w-full md:w-1/3 border-white">
                {name}
              </h1>
            );
          })}
        </div>
        <h1
          onMouseEnter={() => {
            setDescription('Description for Sponsor Track');
          }}
          onMouseLeave={() =>
            setDescription('General description for all tracks')
          }
          className="w-full md:w-2/3 mx-auto hover:bg-transparent hover:text-white border-2 border-black hover:border-white hover:animate-none bg-yellow-600 mt-10 px-4 py-2 rounded-lg text-4xl cursor-pointer shadow-black shadow-xl animate-pulse text-center">
          Sponsor Track
        </h1>
      </div>
    </div>
  );
};

export default Tracks;
