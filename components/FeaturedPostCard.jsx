import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const MainPostCard = ({ post }) => (
  <div className="flex hover-scale md:flex-row flex-col mt-4 mb-12 font-myfont md:h-44">
    <div
      className="flex rounded-lg bg-center bg-no-repeat bg-cover shadow-xl h-32  md:w-1/2 md:h-44"
      style={{
        backgroundImage: `url('${post.featuredImage.url}')`,
      }}
    />
    <div className="flex md:w-1/2   flex-col rounded-lg  px-2 ml-3 py-4  ">
      {post.categories && (
        <div className="text-blue-500 text-xs text-left mb-2 text-shadow">
          {post.categories
            .map((category) => category.name)
            .join()}
        </div>
      )}
      <p className="text-black text-left  mb-2 text-shadow font-semibold text-md">
        {post.title}
      </p>
      <p className="text-black text-left mb-2 text-shadow text-xs">
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <div className="flex items-center bottom-5 w-full ">
        <Image
          unoptimized
          alt={post.author.name}
          height="20px"
          width="20px"
          className=" drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-xs text-black text-shadow ml-2 font-medium">
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default MainPostCard;
