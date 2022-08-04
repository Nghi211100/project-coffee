/* eslint-disable tailwindcss/no-custom-classname */
import type { Post } from 'config/postConfig';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Iprops {
  post: Post;
}

export const Blog = (props: Iprops) => {
  const { post } = props;

  return (
    <>
      <div className="image__setmaxheight w-full max-w-[722px] shrink-0 md:h-full md:max-h-[250px]">
        <div className="relative h-48 w-full md:h-full">
          <Image
            src={post.srcImg}
            alt={post.altImg}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
      <div className="my-auto flex flex-1 flex-col bg-white md:max-h-[235px]">
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-sm font-medium ">
            {post.category &&
              post.category.map((cate, index) => (
                <Link key={index + 1} href={cate.slug}>
                  <a className="mr-2 bg-[#73CCC6] px-3 py-1 text-white">
                    {cate.name}
                  </a>
                </Link>
              ))}
          </p>
          <a href={`/${post.date}/${post.slug}`} className="mt-2 block">
            <p className="text-ellipsis pt-4 text-[18px] font-semibold text-gray-900 line-clamp-2">
              {post.title}
            </p>

            <p className="mb-2 text-ellipsis pt-5 text-base text-gray-500 line-clamp-3">
              {post.content}
            </p>
          </a>
        </div>
        <div className="mt-4 w-max rounded-sm bg-[#DDC3AF] py-3 px-5 text-white">
          <Link href={`/${post.date}/${post.slug}`}>
            <a className="text-white">Xem thêm</a>
          </Link>
        </div>
      </div>
    </>
  );
};
