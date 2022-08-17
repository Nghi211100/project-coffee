/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-children-prop */
import { gql, useQuery } from '@apollo/client';
import { editorJsParser } from 'editorjs-data-parser';
import apolloClient from 'graphql-client/apollo';
import { getProducts } from 'graphql-client/queries';
import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

import Title from '@/components/product-slug/Title';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const SanPhamPhela = (props: any) => {
  const { product } = props.data;
  const { data, loading } = useQuery(getProducts);
  const products = loading === false ? data.products.edges : [];

  const description = editorJsParser(JSON.parse(product.description).blocks);

  const addToCart = async (quantity: number, variantId: string) => {
    const client = apolloClient;
    await client.mutate({
      mutation: gql`
        mutation {
          checkoutLinesAdd(
            checkoutId: "Q2hlY2tvdXQ6MWNlNWVmZTYtYTg2My00MmM5LWE0ZDktOThiMWM2MWM4OWMy"
              lines: [{ quantity: ${quantity}, variantId: "${variantId}"}]
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
    await client.refetchQueries({
      include: 'active',
    });
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
              <p className="py-5 text-left text-[22px] font-medium text-[#F58B74] md:text-[27px]">
                <NumberFormat
                  thousandSeparator={true}
                  thousandsGroupStyle="thousand"
                  value={product.pricing.priceRange.start.net.amount}
                  suffix={' đ'}
                />
              </p>
            </div>
            <div className="mt-2 w-max ">
              <Link href={'/cart'}>
                <a
                  className="rounded-sm bg-[#F58B74] py-3 px-6 text-[14px] text-white md:px-8 md:py-4"
                  onClick={() => addToCart(1, product.variants[0].id)}
                >
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
