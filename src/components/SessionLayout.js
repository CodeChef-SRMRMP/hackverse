import React, { useRef } from 'react';
import Xarrow from 'react-xarrows';

const SessionLayout = () => {
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  return (
    <div className="m-10 mx-5 md:mx-10 lg:mx-20 space-y-5">
      <h1 className="text-4xl text-white">Session Layout</h1>
      <div className="bg-black/60 backdrop-blur-3xl p-5 lg:space-x-20 rounded-lg text-white flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-evenly">
        <div className="lg:inline-block space-y-3">
          <div
            ref={card1}
            className="backdrop-blur-2xl p-3 bg-[#303030]/70 rounded-lg">
            <p className="text-center lg:text-left text-[#A9A9A9] text-sm">
              Round I
            </p>
            <h1 className="text-4xl text-center lg:text-left">SHORTLISTING</h1>
          </div>
          <p className="text-center lg:text-left text-xs ml-1">
            Nulla deserunt elit veniam sint eu in. Irure irure eiusmod cillum eu
            pariatur cupidatat nostrud. Elit laboris pariatur aute adipisicing
            aliquip cillum do enim mollit velit adipisicing consequat. Aliqua
            amet in voluptate officia esse reprehenderit.
          </p>
        </div>
        <div className="lg:mt-[5rem] lg:inline-block space-y-3">
          <div
            ref={card2}
            className="backdrop-blur-2xl p-3 bg-[#303030]/70 rounded-lg">
            <p className="text-center lg:text-left text-[#A9A9A9] text-sm">
              Round ii
            </p>
            <h1 className="text-4xl text-center lg:text-left">REVIEW</h1>
          </div>
          <p className="text-center lg:text-left text-xs ml-1">
            Nulla deserunt elit veniam sint eu in. Irure irure eiusmod cillum eu
            pariatur cupidatat nostrud. Elit laboris pariatur aute adipisicing
            aliquip cillum do enim mollit velit adipisicing consequat. Aliqua
            amet in voluptate officia esse reprehenderit.
          </p>
        </div>
        <div className="lg:mt-[10rem] lg:inline-block space-y-3 ">
          <div
            ref={card3}
            className="backdrop-blur-2xl p-3 bg-[#303030]/70 rounded-lg">
            <p className="text-center lg:text-left text-[#A9A9A9] text-sm">
              Round III
            </p>
            <h1 className="text-4xl text-center lg:text-left">PITCHING</h1>
          </div>
          <p className="text-center lg:text-left text-xs ml-1">
            Nulla deserunt elit veniam sint eu in. Irure irure eiusmod cillum eu
            pariatur cupidatat nostrud. Elit laboris pariatur aute adipisicing
            aliquip cillum do enim mollit velit adipisicing consequat. Aliqua
            amet in voluptate officia esse reprehenderit.
          </p>
        </div>
        <div className="lg:mt-[15rem] lg:inline-block space-y-3 ">
          <div
            ref={card4}
            className="backdrop-blur-2xl p-3 bg-[#303030]/70 rounded-lg">
            <p className="text-center lg:text-left text-[#A9A9A9] text-sm">
              Round IV
            </p>
            <h1 className="text-4xl text-center lg:text-left">FINAL PITCH</h1>
          </div>
          <p className="text-center lg:text-left text-xs ml-1">
            Nulla deserunt elit veniam sint eu in. Irure irure eiusmod cillum eu
            pariatur cupidatat nostrud. Elit laboris pariatur aute adipisicing
            aliquip cillum do enim mollit velit adipisicing consequat. Aliqua
            amet in voluptate officia esse reprehenderit.
          </p>
        </div>
        <div className="hidden lg:block">
          <Xarrow
            color="#fff"
            animateDrawing
            dashness
            start={card1}
            end={card2}
          />
          <Xarrow
            color="#fff"
            animateDrawing
            dashness
            start={card2}
            end={card3}
          />
          <Xarrow
            color="#fff"
            animateDrawing
            dashness
            start={card3}
            end={card4}
          />
        </div>
      </div>
    </div>
  );
};

export default SessionLayout;
