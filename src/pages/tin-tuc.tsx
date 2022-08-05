/* eslint-disable tailwindcss/no-custom-classname */
import axios from 'axios';
import type { Post } from 'config/postConfig';
import type { GetStaticProps } from 'next';
import Link from 'next/link';

import { Blog } from '@/components/Blog';
import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const title = {
  title: 'TIN TỨC',
  srcImg: '/assets/images/DSC09515.jpg',
  altImg: 'post1',
};

interface Iprops {
  posts: Post[];
}

const TinTuc = (props: Iprops) => {
  const { posts } = props;

  return (
    <Main
      meta={
        <Meta
          title="Tin Tức - Phela"
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className="w-full  pt-[61px] pb-[740px] md:pb-96">
        <Head src={title.srcImg} alt={title.altImg} title={title.title} />
        <div className="mx-auto max-w-6xl px-3 pt-14 md:pt-[60px]">
          <div className="flex items-center gap-x-2">
            <Link href="/">
              <a className="text-[15px] text-amber-700 md:text-[18px]">
                Phela &gt;
              </a>
            </Link>
            <h3 className="text-[13px] md:text-[16px]">Tin Tức</h3>
          </div>
          <h3 className="pt-10 text-[30px] font-semibold">Blog</h3>
          <div className="mx-auto mt-4 grid max-w-lg gap-5 md:max-w-none md:grid-cols-3">
            {posts.map((post, index) => (
              <div
                key={index + 1}
                className="post__item flex flex-col gap-8 overflow-hidden rounded-lg p-4 shadow-lg md:h-[595px] md:first:col-[1/4] md:first:h-[362px] md:first:flex-row"
              >
                <Blog post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(`api/posts`);
  const posts = res.data;
  return {
    props: {
      posts,
    },
  };
};

export default TinTuc;
