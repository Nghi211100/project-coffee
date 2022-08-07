/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';

import BannerLast from '@/components/blog/BannerLast';
import { Head } from '@/components/blog/Head';
import { Post } from '@/components/Post';
import Title from '@/components/product-slug/Title';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import dataPost from './api/posts/data.json';
import dataProduct from './api/products/data.json';

const title = {
  title: 'SỰ KIỆN',
  srcImg: '/assets/images/DSC09515.jpg',
  altImg: 'post1',
};

const SuKien = () => {
  const { posts } = dataPost;
  const { products } = dataProduct;
  return (
    <Main
      meta={
        <Meta
          title="Sự Kiện - Phela"
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className="w-full  pt-[61px] pb-[740px] md:pb-96">
        <Head src={title.srcImg} alt={title.altImg} title={title.title} />
        <div className="mx-auto max-w-6xl px-3 pt-14  md:pt-[60px]">
          <div className="flex items-center gap-x-2">
            <Link href="/">
              <a className="text-[15px] text-amber-700 md:text-[18px]">
                Phela &gt;
              </a>
            </Link>
            <h3 className="text-[13px] md:text-[16px]">Sự kiện</h3>
          </div>
          <div className="mx-auto mt-4 grid max-w-lg gap-3 pb-10 md:max-w-none md:grid-cols-3">
            {posts.map((post, index) => (
              <div
                key={index + 1}
                className="flex flex-col gap-1 overflow-hidden md:h-[380px]"
              >
                <Post post={post} />
              </div>
            ))}
          </div>
          <div className="py-10">
            <BannerLast posts={posts} title="BÀI VIẾT NỔI BẬT" />
          </div>
          <div className="py-10">
            <Title products={products.slice(0, 4)} title="SẢN PHẨM NỔI BẬT" />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SuKien;
