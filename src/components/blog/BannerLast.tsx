import type { Post } from 'config/postConfig';
import Image from 'next/image';
import Link from 'next/link';

interface Iprops {
  posts: Post[];
  title: string;
}

export default function BannerLast(props: Iprops) {
  const { posts } = props;
  return (
    <div>
      <div className="md:flex md:items-center md:justify-center">
        <h2 className="mx-2 text-center text-[21px] font-semibold tracking-tighter md:text-[28px]">
          {props.title}
        </h2>
      </div>
      <div className="mx-auto mt-4 grid max-w-lg gap-3 md:max-w-none md:grid-cols-4">
        {posts.slice(0, 4).map((post, index) => (
          <div
            key={index + 1}
            className="flex flex-col gap-1 overflow-hidden md:h-[380px]"
          >
            <Link href={`/${post.date}/${post.slug}`}>
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
          </div>
        ))}
      </div>
    </div>
  );
}
