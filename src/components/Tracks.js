import React, { useState } from 'react';
import { Modal } from 'antd';

const tracks = [
  {
    name: 'Healthcare',
    desc: `Health care is the practice of providing medical treatment and services to individuals who are sick, injured, or in need of preventive care. It encompasses a wide range of services, including primary care, emergency care, specialty care, and public health services.

    Health care is a critical industry for promoting individual and public health, as well as economic growth and social well-being. It is also an industry facing significant challenges, including rising costs, access and equity issues, and the need to address chronic diseases and mental health.
    
    Efforts are being made to address these challenges, through initiatives such as health care reform, telehealth and virtual care, and personalized medicine. There is also a growing emphasis on preventive care, which seeks to address health issues before they become more serious.
    
    Overall, health care is an essential industry that plays a critical role in our lives and in the health of our communities. It is important that we continue to invest in and support this industry, while also addressing the challenges it faces and ensuring equitable access to care for all individuals.
    Blockchain can be used in healthcare to securely store and share patient data, track pharmaceutical supply chains, and streamline insurance claims processing.`,
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState('');
  return (
    <div className="m-10 mx-5 md:mx-10 lg:mx-20">
      <h1 className="dark:text-white text-5xl text-center">Tracks</h1>
      <div className="bg-black/60 mt-5 p-10 backdrop-blur-xl px-10 lg:px-20">
        <div className="flex flex-wrap gap-5 items-end justify-center md:justify-between lg:justify-evenly rounded-md text-white">
          {tracks?.map(({ name, desc }, index) => {
            return (
              <h1
                onClick={() => {
                  setIsModalOpen(true);
                  setDescription(desc);
                }}
                key={index}
                className="hover:bg-yellow-600 cursor-pointer border-2 text-center px-3 py-2 text-4xl rounded-xl w-full md:w-1/3 border-white">
                {name}
              </h1>
            );
          })}
        </div>
        <h1 className="w-full md:w-2/3 mx-auto hover:bg-transparent hover:text-white border-2 border-black hover:border-white hover:animate-none bg-yellow-600 mt-10 px-4 py-2 rounded-lg text-4xl cursor-pointer shadow-black shadow-xl animate-pulse text-center">
          Sponsor Track
        </h1>
      </div>
      <Modal
        title="Description"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        width={1000}>
        <p className="font-light text-lg">{description}</p>
      </Modal>
    </div>
  );
};

export default Tracks;
