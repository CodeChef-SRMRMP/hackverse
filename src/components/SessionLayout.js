import React from 'react';
const contents = [
  {
    title: 'Shortlisting',
    round: 'I',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh nulla, vulputate fringilla tempor vitae',
  },
  {
    title: 'Review',
    round: 'II',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh nulla, vulputate fringilla tempor vitae',
  },
  {
    title: 'Pitching',
    round: 'III',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh nulla, vulputate fringilla tempor vitae',
  },
  {
    title: 'Final Pitch',
    round: 'IV',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh nulla, vulputate fringilla tempor vitae',
  },
];
const SessionLayout = () => {
  return (
    <div className="m-10 mx-5 md:mx-10 lg:mx-20 space-y-5">
      <h1 className="text-4xl text-white">Session Layout</h1>
      <div className="bg-black/60 backdrop-blur-3xl p-5 lg:space-x-10 lg:space-y-0 rounded-lg text-white flex flex-col lg:flex-row justify-evenly">
        {contents?.map((content, index) => {
          return <SessionCard key={index} id={index} {...content} />;
        })}
      </div>
    </div>
  );
};

export default SessionLayout;

const SessionCard = ({ title, description, round, id }) => {
  return (
    <>
      <div
        className="hidden lg:inline-block space-y-3 mb-[5rem]"
        style={{ marginTop: `${(id + 1) * 5}rem` }}>
        <div className="p-3 bg-[#303030] rounded-lg">
          <p className="text-[#A9A9A9] text-sm">Round {round}</p>
          <h1 className="text-4xl">{title}</h1>
        </div>
        <p className="text-xs ml-1">{description}</p>
      </div>
      <div className="lg:hidden space-y-3 my-10">
        <div className="p-3 bg-[#303030] rounded-lg">
          <p className="text-[#A9A9A9] text-sm">Round {round}</p>
          <h1 className="text-4xl">{title}</h1>
        </div>
        <p className="text-xs ml-1">{description}</p>
      </div>
    </>
  );
};
