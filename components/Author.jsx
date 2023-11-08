import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="flex flex-col md:flex-row border font-myfont align-middle items-center  text-center   mb-20 py-4 p-2 relative rounded-xl shadow-xl ">
    <div className="w-1/5 md:w-1/3">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="200px"
        width="200px"
        className="align-middle  rounded-full"
        src={author.photo.url}
      />
    </div>
    <div className="md:w-2/3  mx-4 md:mx-0 ">
      <h3 className="text-blue-900 text-center md:text-left mt-2 mb-3 md:mb-4 text-xl  font-bold">{author.name}</h3>
      <p className="text-black mb-4 text-left leading-5 text-xs md:text-sm">{ author.bio }</p>
      <div className="flex text-xl md:text-2xl my-2 space-x-4 text-blue-900">
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>

        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>

        <a href="https://www.twitter.com">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  </div>
);

export default Author;
