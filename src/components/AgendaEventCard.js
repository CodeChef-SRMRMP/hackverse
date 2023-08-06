import React from 'react';

const AgendaEventCard = ({ time, name, breif }) => {
  return (
    <div className="mt-[22px]  flex">
      <span className="text-right inline-block text-[20px] w-[33%]">
        {time}
      </span>
      <span className="w-[10%] inline-block"></span>
      <div className="w-[60%]">
        <span className="text-left text-[20px] block ">{name}</span>
        {breif && (
          <span className="text-left text-[14px] text-white/50 my-[2px] w-full">
            {breif}
          </span>
        )}
      </div>
    </div>
  );
};

export default AgendaEventCard;
