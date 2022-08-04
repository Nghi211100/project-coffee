/* eslint-disable react/no-children-prop */
import axios from 'axios';
import { API_URL } from 'config';
import type { Product } from 'config/productConfig';
import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Title from '@/components/product-slug/Title';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface Iprops {
  proDetail: Product;
  productsAll: Product[];
}

const SanPhamPhela = (props: Iprops) => {
  const product = props.proDetail;
  const products = props.productsAll;
  return (
    <Main
      meta={
        <Meta
          title={product.name}
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className="mx-auto max-w-[1170px] px-4 pt-20 pb-[660px] md:pb-60 md:pt-24">
        <div className="flex items-center gap-x-2">
          <Link href="/">
            <a className="text-[15px] text-amber-700 md:text-[18px]">
              Phela &gt;
            </a>
          </Link>
          <Link href="/san-pham-phela">
            <a className="text-[15px] text-amber-700 md:text-[18px]">
              Sản phẩm &gt;
            </a>
          </Link>
          <h3 className="text-[13px] md:text-[16px]">{product.name}</h3>
        </div>
        <div className="px-3 py-7 md:flex md:w-max">
          <div className="relative h-[345px] w-[330px] overflow-hidden rounded-md group-hover:opacity-75 md:h-[520px] md:w-[421px]">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="md:pl-14">
            <h3 className="pt-3 text-[25px] font-semibold md:text-[32px]">
              {product.name}
            </h3>
            <div>
              <p className="py-5 text-left text-[22px] font-medium text-[#F58B74] md:text-[27px]">
                {product.price}
              </p>
            </div>
            <div className="mt-2 w-max ">
              <Link href={'/cart'}>
                <a className="rounded-sm bg-[#F58B74] py-3 px-6 text-[14px] text-white md:px-8 md:py-4">
                  MUA NGAY
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <div>
            <div className="mx-auto w-max pt-5">
              <p className="relative py-4 text-[15px] font-medium after:absolute after:left-[50%] after:bottom-0 after:h-[4px] after:w-1/2 after:-translate-x-1/2 after:bg-[#be7859] md:text-[28px] md:text-gray-700">
                CHI TIẾT SẢN PHẨM
              </p>
            </div>
          </div>
          <div className="py-5 text-stone-600 md:text-[18px]">
            <article className="prose-base prose max-w-full space-y-1 text-black md:prose-base">
              <ReactMarkdown
                children={product.detail ? product.detail : ''}
                remarkPlugins={[remarkGfm]}
              />
            </article>
          </div>
        </div>

        <div className="py-5">
          <Title products={products.slice(0, 2)} title="SẢN PHẨM VỪA XEM" />
        </div>
        <div className="py-20">
          <Title products={products} title="SẢN PHẨM NỔI BẬT" />
        </div>
      </div>
    </Main>
  );
};

export default SanPhamPhela;

export const getServerSideProps: GetServerSideProps = async ({
  query: { slug },
}) => {
  const products = await axios.get(`${API_URL}/products`);
  const product = await axios.get(`${API_URL}/products/${slug}`);
  const proDetail = product.data;
  const productsAll = products.data.slice(0, 4);
  return {
    props: {
      proDetail,
      productsAll,
    },
  };
};
