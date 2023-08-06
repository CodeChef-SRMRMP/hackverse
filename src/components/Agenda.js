import React, { useState } from 'react';
import AgendaEventCard from './AgendaEventCard';

const Agenda = () => {
  const [day, setDay] = useState(0);

  const [stage, setStage] = useState(0);

  const handelDayChange = (day) => {
    setDay(day);
    setStage(0);
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
          className={`flex max-w-[600px] h-full  mt-8 w-full border-[2px] overflow-hidden rounded-t-[16px]  border-white mx-auto ${
            day === 0 && 'hidden'
          }  `}>
          <div
            onClick={() => setStage(0)}
            className={`px-2 mobile-md:px-3 cursor-pointer text-center  text-[24px]  pt-[8px] pb-[5px]  w-full   ${
              stage === 0 && 'bg-gray-100  text-black'
            }  `}>
            MainStage
          </div>
          <div
            onClick={() => setStage(1)}
            className={`px-2 mobile-md:px-3 pt-[8px]  text-center pb-[5px] text-[24px]  cursor-pointer  w-full   ${
              stage === 1 && 'bg-gray-100  text-black'
            } `}>
            SubStage 1
          </div>
          <div
            onClick={() => setStage(2)}
            className={`px-2 mobile-md:px-3 pt-[8px]  text-center pb-[5px]  text-[24px]  cursor-pointer w-full   ${
              stage === 2 && 'bg-gray-100  text-black'
            } `}>
            SubStage 2
          </div>
        </div>
        <div
          className={` max-w-[600px] p-[16px] w-full border-[2px] border-t-0 overflow-hidden rounded-b-[16px]  border-white mx-auto  items-center`}>
          <div className={`${day !== 0 && 'hidden'}`}>
            {stage === 0 && (
              <>
                <AgendaEventCard time={'10:10 AM IST'} name={'Francesco'} />
                <AgendaEventCard time={'7:10 PM IST'} name={'RaJ'} />
              </>
            )}
          </div>
          <div className={`${day !== 1 && 'hidden'}`}>
            {stage === 0 && (
              <>
                <AgendaEventCard
                  time={'10:10 - 10:30 AM IST'}
                  name={'Francesco'}
                  breif={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                  }
                />
              </>
            )}

            {stage === 1 && (
              <>
                <AgendaEventCard
                  time={'10:10 - 10:30 AM IST'}
                  name={'Francco'}
                />
              </>
            )}

            {stage === 2 && (
              <>
                <AgendaEventCard
                  time={'11:20 - 11:30 AM IST'}
                  name={'Francesco'}
                />
              </>
            )}
          </div>
          <div className={`${day !== 2 && 'hidden'}`}>
            {stage === 0 && (
              <>
                <AgendaEventCard
                  time={'10:10 - 10:30 AM IST'}
                  name={'Francesco'}
                />
              </>
            )}

            {stage === 1 && (
              <>
                <AgendaEventCard
                  time={'10:10 - 10:30 AM IST'}
                  name={'Francco'}
                />
              </>
            )}

            {stage === 2 && (
              <>
                <AgendaEventCard
                  time={'11:20 - 11:30 AM IST'}
                  name={'Francesco'}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
