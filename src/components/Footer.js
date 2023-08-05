import React from 'react';

import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#202021] lg:px-[5rem] md:px-[3rem] backdrop-blur-3xl p-5 py-7 text-white dark:text-black dark:shadow-gray-500">
      {/* Social Media */}
      <div className="flex items-center justify-between">
        {/* HackVerse Logo */}
        <div className="hidden sm:block cursor-pointer">
          <img
            src={require('../assets/images/HV.ico')}
            alt="Logo"
            className="w-12 h-12"
          />
        </div>
        <div className="text-[#A9A9A9] w-full flex-col flex space-y-3">
          <div className="flex sm:gap-8 justify-around sm:justify-end">
            <a
              href="https://www.instagram.com/hackverseind/"
              target="_blank"
              rel="noreferrer">
              <FaInstagram className="text-[2rem]" />
            </a>
            <a
              href="https://www.linkedin.com/company/hackverse-india/"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin className="text-[2rem]" />
            </a>
            <a
              href="https://twitter.com/HackVerseIND/"
              target="_blank"
              rel="noreferrer">
              <FaGithubSquare className="text-[2rem]" />
            </a>

            <a
              href="https://twitter.com/HackVerseIND/"
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
        {/* Tearms and Conditons */}
        {/* <div className="mt-8 flex flex-wrap   justify-between w-full text-gray-300/[91%] transition-all duration-200">
          <a
            href="https://twitter.com/HackVerseIND/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#A9A9A9] text-[0.9rem] lg:text-[1.1rem]">
            Code of Conduct
          </a>
          <a
            href="https://twitter.com/HackVerseIND/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#A9A9A9] text-[0.9rem] lg:text-[1.1rem]">
            Terms and Conditions
          </a>
          <a
            href="https://twitter.com/HackVerseIND/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#A9A9A9] text-[0.9rem] lg:text-[1.1rem] ">
            Privacy Policy
          </a>
          <a
            href="https://twitter.com/HackVerseIND/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#A9A9A9] text-[0.9rem] lg:text-[1.1rem]">
            Sponsor Us
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
