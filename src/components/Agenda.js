import React, { useState } from 'react';
import AgendaEventCard from './AgendaEventCard';

const Agenda = () => {
  const [day, setDay] = useState(0);

  const handelDayChange = (day) => {
    setDay(day);
  };

  return (
    <div className="m-10 mx-5 md:mx-10 lg:mx-20 max-w-screen overflow-hidden">
      <h1 className="text-white text-4xl text-left">Agenda</h1>
      <div className="bg-black/60 mt-5 p-5 py-10 backdrop-blur-xl  text-white rounded-md">
        <div
          className={`flex max-w-[600px] w-full border-b-[2px]  border-white mx-auto  items-center`}>
          <div
            onClick={() => handelDayChange(0)}
            className={`px-5 cursor-pointer text-center pt-[8px] pb-[5px]  translate-y-[2px] w-full  rounded-t-lg min-w-fit ${
              day === 0 && 'bg-gray-100  text-black'
            }  `}>
            <span className="text-[24px]  sm:text-[28px] md:text-[36px] whitespace-nowrap">
              27 <span className={`${day !== 0 && 'hidden'}`}>Oct '23</span>
            </span>
          </div>
          <div
            onClick={() => handelDayChange(1)}
            className={`px-3 pt-[8px] text-center pb-[5px] rounded-t-lg cursor-pointer w-full min-w-fit   ${
              day === 1 && 'bg-gray-100  text-black'
            } `}>
            <span className="text-[24px]  sm:text-[28px] md:text-[36px] whitespace-nowrap">
              28 <span className={`${day !== 1 && 'hidden'}`}>Oct '23</span>
            </span>
          </div>
          <div
            onClick={() => handelDayChange(2)}
            className={`px-3 pt-[8px] text-center pb-[5px] rounded-t-lg cursor-pointer w-full min-w-fit   ${
              day === 2 && 'bg-gray-100  text-black'
            } `}>
            <span className="text-[24px]  sm:text-[28px] md:text-[36px] whitespace-nowrap">
              29 <span className={`${day !== 2 && 'hidden'}`}>Oct '23</span>
            </span>
          </div>
        </div>

        <div
          className={` max-w-[600px] p-[16px] w-full border-[2px] border-t-0 overflow-hidden rounded-b-[16px]  border-white mx-auto  items-center`}>
          <div className={`${day !== 0 && 'hidden'}`}>
            <AgendaEventCard
              time={'4:00 - 7:00 PM IST'}
              name={'HackVerse 2.0 Launch Event'}
            />
          </div>
          <div className={`${day !== 1 && 'hidden'}`}>
            <AgendaEventCard time={'7:30 AM IST'} name={'Checkin Starts'} />
            <AgendaEventCard
              time={'7:30 - 9:00 AM IST'}
              name={'Networking and Team Making'}
            />
            <AgendaEventCard
              time={'9:00 - 12:00 PM IST'}
              name={'Hackathon Inagruation + Speaker Slot'}
            />
            <AgendaEventCard time={'12:00 - 1:00 PM IST'} name={'Lunch'} />
            <AgendaEventCard time={'1:00 PM IST'} name={'Hackathon Starts'} />
            <AgendaEventCard
              time={'4:00 - 6:00 PM IST'}
              name={'Workshop + Tea Break'}
            />
            <AgendaEventCard time={'9:30 - 10:30 PM IST'} name={'Dinner'} />
            <AgendaEventCard
              time={'12:00 - 01:00 AM IST'}
              name={'Games and Fun Activities'}
            />
          </div>
          <div className={`${day !== 2 && 'hidden'}`}>
            <AgendaEventCard
              time={'8:00 - 9:00 AM IST'}
              name={'Networking + Breakfast'}
            />
            <AgendaEventCard time={'9:00 - 10:00 AM IST'} name={'Workshop'} />
            <AgendaEventCard time={'1:00 PM IST'} name={'Hackathon Ends'} />
            <AgendaEventCard time={'1:00 - 2:00 PM IST'} name={'Lunch'} />
            <AgendaEventCard time={'2:00 - 4:00 PM IST'} name={'Judging'} />
            <AgendaEventCard
              time={'4:00 - 6:00 PM IST'}
              name={'Closing Ceremony'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
