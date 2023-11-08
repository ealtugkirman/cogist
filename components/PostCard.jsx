import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="bg-white  border font-myfont rounded-2xl  flex flex-col md:flex-row  p-0  mb-6 md:mb-12">
    <div className="flex md:w-1/2 m-4">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className=" object-cover z-20 rounded-2xl "
      />
    </div>

    <div className="flex flex-col space-y-2 my-2 ml-2 md:w-2/3">

      {post.categories && (
      <div className="text-blue-500 text-xs text-shadow">
        {post.categories
          .map((category) => category.name)
          .join()}
      </div>
      )}

      <h2 className="transition flex duration-700 text-left mr-2  cursor-pointer hover:text-pink-600  text-xl font-bold">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      <span className="text-xs md:text-xs opacity-70 ">
        {moment(post.createdAt).format('DD MMM, YYYY')}
      </span>
      <p className="block text-left opacity-70 text-sm mr-4">
        {post.excerpt}
      </p>
      <div className="hidden md:flex justify-start mt-1 w-full lg:w-auto  items-center">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="30px"
          width="30px"
          className="rounded-full"
          src={post.author.photo.url}
        />
        <p className=" text-gray-700 ml-2 font-medium  text-xs lg:text-md">
          {post.author.name}
        </p>
      </div>

    </div>

    {/* <h1 className="transition flex duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
      </div>
      <div className="font-medium text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div> */}
  </div>
);

export default PostCard;
