/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-children-prop */
import { gql, useQuery } from '@apollo/client';
import { editorJsParser } from 'editorjs-data-parser';
import apolloClient from 'graphql-client/apollo';
import { getProducts } from 'graphql-client/queries';
import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import NumberFormat from 'react-number-format';

import Title from '@/components/product-slug/Title';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const SanPhamPhela = (props: any) => {
  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const client = apolloClient;
  const cartId =
    typeof window !== 'undefined' ? localStorage.getItem('cartId') : 'null';
  const router = useRouter();

  const { product } = props.data;
  const { data, loading } = useQuery(getProducts);
  const products = loading === false ? data.products.edges : [];

  const description = editorJsParser(JSON.parse(product.description).blocks);

  const addToCart = async (qty: number, variantId: string) => {
    if (!cartId) {
      const res = await client.mutate({
        mutation: gql`
        mutation {
          checkoutCreate(
            input: {
              lines: { quantity: ${quantity}, variantId: "${variantId}"}
            }
          ) {
            checkout{
              id
            }
            errors {
              field
              code
              message
            }
          }
        }
      `,
      });
      const cartIdNew = res.data.checkoutCreate.checkout.id;
      localStorage.setItem('cartId', cartIdNew);
    } else {
      await client.mutate({
        mutation: gql`
          mutation {
            checkoutLinesAdd(
                id: "${cartId}"
                lines: [{ quantity: ${qty}, variantId: "${variantId}"}]
            ) {
              errors {
                field
                code
                message
              }
            }
          }
        `,
      });
    }
    await client.refetchQueries({
      include: 'all',
    });

    router.push('/cart');
  };
  const [price, setPrice] = useState(
    product.pricing.priceRange.start.net.amount
  );

  const [variantId, setVariantId] = useState(product.variants[0].id);
  const handleChangeSize = (value: string) => {
    setSize(value);
    setPrice(value === 'M' ? price - 10000 : price + 10000);
    setVariantId(
      value === 'M' ? product.variants[0].id : product.variants[1].id
    );
  };

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
              src={product.thumbnail.url}
              alt={product.thumbnail.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="md:pl-14">
            <h3 className="pt-3 text-[25px] font-semibold md:text-[32px]">
              {product.name}
            </h3>
            <div>
              <p className="py-5 text-left text-[22px] font-medium text-[#be7352] md:text-[27px]">
                <NumberFormat
                  thousandSeparator={true}
                  thousandsGroupStyle="thousand"
                  value={price}
                  suffix={' đ'}
                />
              </p>
            </div>
            <div className="flex items-center space-x-4 pb-5">
              <label className="block text-sm font-medium text-gray-700 md:text-lg">
                Kích cỡ
              </label>
              <select
                id="size"
                name="size"
                className="m-2 block  rounded-md border border-gray-300 p-1 py-2 pr-10 text-base focus:outline-none focus:ring-indigo-500 sm:text-sm"
                defaultValue={size}
                onChange={(e) => handleChangeSize(e.target.value)}
              >
                <option>M</option>
                <option>L</option>
              </select>
              <label className="block text-sm font-medium text-gray-700 md:text-lg">
                Số lượng
              </label>
              <select
                id="quantity"
                name="quantity"
                className="m-2 block  rounded-md border border-gray-300 p-1 py-2 pr-10 text-base focus:outline-none focus:ring-indigo-500 sm:text-sm"
                defaultValue={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="mt-2 w-max ">
              <button
                className="rounded-sm bg-primary-default py-3 px-6 text-[14px] text-white hover:bg-primary-hover md:px-8 md:py-4"
                onClick={() => addToCart(quantity, variantId)}
              >
                MUA NGAY
              </button>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <div>
            <div className="mx-auto w-max pt-5">
              <p className="relative py-4 text-[15px] font-medium after:absolute after:left-[50%] after:bottom-0 after:h-[4px] after:w-1/2 after:-translate-x-1/2 after:bg-primary-default md:text-[28px] md:text-gray-700">
                CHI TIẾT SẢN PHẨM
              </p>
            </div>
          </div>
          <div className="py-5 text-stone-600 md:text-[18px]">
            <article
              className="prose-base prose max-w-full space-y-1 text-black"
              dangerouslySetInnerHTML={{ __html: description }}
            ></article>
          </div>
        </div>
        <div className="py-5">
          <Title products={products.slice(0, 2)} title="SẢN PHẨM VỪA XEM" />
        </div>
        <div className="py-20">
          <Title products={products.slice(0, 6)} title="SẢN PHẨM NỔI BẬT" />
        </div>
      </div>
    </Main>
  );
};

export default SanPhamPhela;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug !== undefined ? query.slug : 'null';

  const client = apolloClient;
  const { data } = await client.query({
    query: gql`
      query {
        product(slug: "${slug}", channel:"phe-la") {
          id
          name
          slug
          description
          pricing {
            priceRange {
              start {
                net {
                  amount
                }
              }
            }
          }
          thumbnail {
            url
            alt
          }
          variants{
            id
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
};
