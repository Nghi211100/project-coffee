/* eslint-disable tailwindcss/no-custom-classname */
import type { Post as PostDetail } from 'config/postConfig';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Iprops {
  post: PostDetail;
}

export const Post = (props: Iprops) => {
  const { post } = props;

  return (
    <>
      <Link href={`${post.date}/${post.slug}`}>
        <a className="h-full">
          <div className="image__setmaxheight w-full max-w-[722px] shrink-0 md:h-full md:max-h-[210px]">
            <div className="relative h-48 w-full md:h-full">
              <Image
                src={post.srcImg}
                alt={post.altImg}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
          <div className="bg-white md:max-h-[235px]">
            <div className="mt-2 block">
              <p className="text-ellipsis text-[18px] font-semibold text-gray-900 line-clamp-2">
                {post.title}
              </p>

              <p className="mb-2 text-ellipsis pt-2 text-base text-gray-500 line-clamp-3">
                {post.content}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};
