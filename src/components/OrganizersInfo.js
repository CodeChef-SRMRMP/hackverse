import React from 'react';
import ProfilePhoto from '../assets/images/profile-photo.png';

const OrganizersInfo = () => {
  return (
    <div className="  p-[5rem] pb-[8rem] bg-black">
      <h1 className="text-center text-[2rem] text-white mb-[3rem]">
        Organizers Info
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[5rem] gap-y-[5rem] ">
        <div className="col-span-1 mx-auto max-w-[18rem] bg-white py-3 rounded-2xl">
          <div className="">
            <img src={ProfilePhoto} alt="profilePhoto" className="w-[18rem]" />
          </div>
          <div className="py-5">
            <p className="text-[3rem] text-center leading-[1]">John doe</p>
            <p className="text-center text-[1.4rem] leading-[0.2]">organizer</p>
          </div>
        </div>

        <div className="col-span-1 mx-auto max-w-[18rem] bg-white py-3 rounded-2xl">
          <div className="">
            <img src={ProfilePhoto} alt="profilePhoto" className="w-[18rem]" />
          </div>
          <div className="py-5">
            <p className="text-[3rem] text-center leading-[1]">John doe</p>
            <p className="text-center text-[1.4rem] leading-[0.2]">organizer</p>
          </div>
        </div>

        <div className=" bg-white mx-auto max-w-[18rem] py-3 rounded-2xl">
          <div className="">
            <img src={ProfilePhoto} alt="profilePhoto" className="w-[18rem]" />
          </div>
          <div className="py-5">
            <p className="text-[3rem] text-center leading-[1]">John doe</p>
            <p className="text-center text-[1.4rem] leading-[0.2]">organizer</p>
          </div>
        </div>

        <div className=" bg-white mx-auto max-w-[18rem] py-3 rounded-2xl">
          <div className="">
            <img src={ProfilePhoto} alt="profilePhoto" className="w-[18rem]" />
          </div>
          <div className="py-5">
            <p className="text-[3rem] text-center leading-[1]">John doe</p>
            <p className="text-center text-[1.4rem] leading-[0.2]">organizer</p>
          </div>
        </div>

        <div className=" bg-white mx-auto max-w-[18rem] py-3 rounded-2xl">
          <div className="">
            <img src={ProfilePhoto} alt="profilePhoto" className="w-[18rem]" />
          </div>
          <div className="py-5">
            <p className="text-[3rem] text-center leading-[1]">John doe</p>
            <p className="text-center text-[1.4rem] leading-[0.2]">organizer</p>
          </div>
        </div>

        <div className=" bg-white mx-auto max-w-[18rem] py-3 rounded-2xl">
          <div className="">
            <img src={ProfilePhoto} alt="profilePhoto" className="w-[18rem]" />
          </div>
          <div className="py-5">
            <p className="text-[3rem] text-center leading-[1]">John doe</p>
            <p className="text-center text-[1.4rem] leading-[0.2]">organizer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizersInfo;
