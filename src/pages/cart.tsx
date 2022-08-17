import { gql, useQuery } from '@apollo/client';
import apolloClient from 'graphql-client/apollo';
import { getCartItems } from 'graphql-client/queries';
import Link from 'next/link';
import { useState } from 'react';

import CartItem from '@/components/shopcart/CartItem';
import CartSumary from '@/components/shopcart/CartSumary';
import CheckOut from '@/components/shopcart/CheckOut';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function Cart() {
  const [showCheck, setShowCheck] = useState(false);
  const { data, loading } = useQuery(getCartItems);

  const cart = data !== undefined ? data.checkoutLines.edges : [];
  const client = apolloClient;

  const updateCart = async (quantity: number, variantId: string) => {
    await client.mutate({
      mutation: gql`
        mutation {
          checkoutLinesUpdate(
            checkoutId: "Q2hlY2tvdXQ6MWNlNWVmZTYtYTg2My00MmM5LWE0ZDktOThiMWM2MWM4OWMy"
              lines: [{ quantity: ${quantity}, variantId: "${variantId}"}]
          ) {
            checkout{
              lines{
                id
                quantity
                variant{
                  id
                  product{
                    name
                    slug
                    thumbnail{
                      url,
                      alt
                    }
                  }
                }
                totalPrice{
                  gross{
                    amount
                  }
                }
              }    
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
    await client.refetchQueries({
      include: 'active',
    });
  };

  const removeItem = async (id: string) => {
    await client.mutate({
      mutation: gql`
        mutation {
          checkoutLinesDelete(
            linesIds: "${id}", id: "Q2hlY2tvdXQ6MWNlNWVmZTYtYTg2My00MmM5LWE0ZDktOThiMWM2MWM4OWMy"
          ) {
            errors {
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
          title="Cart - Phela"
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className="mx-auto w-screen max-w-7xl bg-white p-4 pt-20 pb-[740px] md:flex md:pb-96 md:pt-24">
        <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex w-screen max-w-full items-center justify-between">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Giỏ hàng
            </h1>
            <Link href="/san-pham-phela">
              <a className="text-[16px] font-bold tracking-tight text-gray-900 hover:text-[#F58B74] sm:text-2xl">
                Tất cả sản phẩm
              </a>
            </Link>
          </div>

          {loading === true ? (
            <p className="mt-12 lg:items-center">Đang tải lên giỏ hàng ...</p>
          ) : (
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              {cart.length === 0 ? (
                <section
                  aria-labelledby="cart-heading"
                  className="lg:col-span-7"
                >
                  <p>
                    Bạn chưa có sản phẩm nào trong giỏ hàng. Tới trang{' '}
                    <Link href="/san-pham-phela">
                      <a className="pt-3 text-gray-600">Sản phẩm</a>
                    </Link>
                  </p>
                </section>
              ) : (
                <section
                  aria-labelledby="cart-heading"
                  className="lg:col-span-7"
                >
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 border-y border-gray-200"
                  >
                    {cart &&
                      cart.map((item: any) => (
                        <li key={item.node.id} className="flex py-6 sm:py-10">
                          <CartItem
                            item={item}
                            updateCart={updateCart}
                            removeItem={removeItem}
                          />
                        </li>
                      ))}
                  </ul>
                </section>
              )}
              <section
                aria-labelledby="summary-heading"
                className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
              >
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Order summary
                </h2>

                <CartSumary cart={cart} />

                <div className="mt-6">
                  <div
                    className="w-full cursor-pointer rounded-md border border-transparent bg-black py-3 px-4 text-center text-base font-medium text-white shadow-sm hover:bg-[#F58B74]"
                    onClick={() => setShowCheck(true)}
                  >
                    Thanh Toán
                  </div>
                </div>
              </section>
            </form>
          )}
        </div>
        {showCheck && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div
              className="absolute inset-0 z-10 flex bg-[rgba(0,0,0,0.5)]"
              onClick={() => setShowCheck(false)}
            ></div>
            <div
              className="z-[200] w-[90%] md:w-auto"
              onClick={() => setShowCheck(true)}
            >
              <CheckOut />
            </div>
          </div>
        )}
      </div>
    </Main>
  );
}
