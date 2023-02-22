import React from 'react';
import Logo from '../assets/images/HV.ico';
import CodeChef from '../sampleAssets/codechef.png';
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaHeart,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#202021] lg:px-[5rem] md:px-[3rem] backdrop-blur-3xl p-5 py-7 text-white dark:text-black dark:shadow-gray-500">
      {/* Social Media */}
      <div className="flex items-center justify-between">
        {/* HackVerse Logo */}
        <div className="hidden sm:block cursor-pointer">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
        </div>
        <div className="text-[#A9A9A9] w-full flex-col flex space-y-3">
          <div className="flex sm:gap-8 justify-around sm:justify-end">
            <a
              href="https://www.instagram.com/codechefsrm.rmp/"
              target="_blank"
              rel="noreferrer">
              <FaInstagram className="text-[2rem]" />
            </a>
            <a
              href="https://www.linkedin.com/company/codechef-srmrmp/"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin className="text-[2rem]" />
            </a>
            <a
              href="https://twitter.com/CodeChefSrmRmp"
              target="_blank"
              rel="noreferrer">
              <FaGithubSquare className="text-[2rem]" />
            </a>

            <a
              href="https://twitter.com/CodeChefSrmRmp"
              target="_blank"
              rel="noreferrer">
              <FaTwitterSquare className="text-[2rem]" />
            </a>
          </div>
          {/* Follow Us */}
          <div className="flex sm:items-end items-center flex-col">
            <p className="text-[0.9rem] sm:text-[1rem]">For more updates,</p>
            <p className="text-[0.9rem] sm:text-[1rem]">
              follow us on all social media
            </p>
          </div>
        </div>
      </div>
      {/* ABout */}
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="flex shadow-xs  mt-5 py-6 px-4 space-x-3 rounded-lg w-full   lg:max-w-md xl:max-w-lg bg-[#00020c]">
          <div className="w-[5rem] flex-shrink-0 flex-grow-0 ">
            <img src={CodeChef} alt="logo" />
          </div>
          <div className="">
            <h1 className="text-white text-xl mb-3">About CodeChef SRM RMP </h1>
            <p className="text-[#A9A9A9] text-[0.9rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium tenetur, sint quam molestiae vitae suscipit provident
              cupiditate qui quis possimus in quisquam, inventore impedit
              facilis libero fuga, vero ipsa odio. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Et impedit dicta facilis provident
              exercitationem
            </p>
          </div>
        </div>
        {/* Tearms and Conditons */}
        <div className="mt-8 flex flex-wrap lg:flex-col gap-5  lg:items-end justify-center text-gray-300/[91%] transition-all duration-200 lg:gap-[0.85rem]">
          <a
            href="https://twitter.com/CodeChefSrmRmp"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#A9A9A9] text-[0.9rem] lg:text-[1.1rem]">
            SRM RMP Code of Conduct
          </a>
          <a
            href="https://twitter.com/CodeChefSrmRmp"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#A9A9A9] text-[0.9rem] lg:text-[1.1rem]">
            Terms and Conditions
          </a>
          <a
            href="https://twitter.com/CodeChefSrmRmp"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#A9A9A9] text-[0.9rem] lg:text-[1.1rem] ">
            Privacy Policy
          </a>
          <a
            href="https://twitter.com/CodeChefSrmRmp"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#A9A9A9] text-[0.9rem] lg:text-[1.1rem]">
            Sponsor Us
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center flex-col sm:flex-row justify-between mt-10 gap-3 px-1">
        <p className="text-[#A9A9A9] text-[0.8rem] sm:text-[0.9rem] text-center flex items-center justify-center gap-2">
          Architected with <FaHeart /> by CodeChefSRM RMP Team
        </p>
        <div>
          <a href="https://twitter.com/CodeChefSrmRmp" rel="noreferrer">
            <img src={CodeChef} alt="logo" className="h-12 w-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
