import { XIcon } from '@heroicons/react/solid';
import type { Product } from 'config/productConfig';
import Link from 'next/link';
import { useState } from 'react';
import NumberFormat from 'react-number-format';

import CheckOut from '@/components/shopcart/CheckOut';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export interface CartItem {
  product: Product;
  qty: number;
}

const carts: CartItem[] = [
  {
    product: {
      id: 1,
      name: 'Ô LONG SỮA PHÊ LA',
      price: 55000,
      slug: 'o-long-sua-phe-la',
      imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
      imageAlt: 'o long sua',
      category: { id: 1, name: 'SYPHON', slug: 'syphon' },
      detail:
        '🌿 Ô Long sữa Phê La \n- Độ cao: 1400m\n- Vùng nguyên liệu: Đà Lạt\n- Phương thức canh tác: Thuận tự nhiên\n- Hương vị: Ô Long đậm đà cùng lớp kem tươi nhẹ nhàng, sánh mịn.',
    },
    qty: 1,
  },
  {
    product: {
      id: 10,
      name: 'TẤM',
      price: 55000,
      slug: 'tam',
      imageSrc: '/assets/images/tam-scaled-1.jpg',
      imageAlt: 'tam',
      category: { id: 3, name: 'MOKA POT', slug: 'mokapot' },
      detail:
        '🌱 Tấm\n- Độ cao : 1400m\n- Vùng nguyên liệu : Đà Lạt\n- Phương thức canh tác : Thuận tự nhiên\n- Đặc tính : Hương vị Ô Long đậm đà hòa quyện cùng mùi thơm dịu dàng của gạo rang.',
    },
    qty: 2,
  },
];

export default function Cart() {
  const [showCheck, setShowCheck] = useState(false);

  const [isEmpty] = useState(false);
  const totalPrice = () => {
    return carts.reduce(
      (price, item) => item.qty * item.product.price + price,
      0
    );
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
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            {isEmpty === true ? (
              <section aria-labelledby="cart-heading" className="lg:col-span-7">
                <p>
                  Bạn chưa có sản phẩm nào trong giỏ hàng. Tới trang{' '}
                  <Link href="/san-pham-phela">
                    <a className="pt-3 text-gray-600">Sản phẩm</a>
                  </Link>
                </p>
              </section>
            ) : (
              <section aria-labelledby="cart-heading" className="lg:col-span-7">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>
                <ul
                  role="list"
                  className="divide-y divide-gray-200 border-y border-gray-200"
                >
                  {carts &&
                    carts.map((item, index) => (
                      <li key={index + 1} className="flex py-6 sm:py-10">
                        <div className="shrink-0">
                          <img
                            src={item.product.imageSrc}
                            alt={item.product.imageAlt}
                            className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-sm">
                                  <a
                                    href={`/product/${item.product.slug}`}
                                    className="text-[18px] font-medium text-gray-700 hover:text-gray-800"
                                  >
                                    {item.product.name}
                                  </a>
                                </h3>
                              </div>
                              <p className="mt-1 text-sm font-medium text-[#F58B74]">
                                <NumberFormat
                                  thousandSeparator={true}
                                  thousandsGroupStyle="thousand"
                                  value={item.product.price}
                                  suffix={' đ'}
                                />
                              </p>
                            </div>

                            <div className="mt-4 sm:mt-0 sm:pr-9">
                              <label className="sr-only">
                                Quantity, {item.product.name}
                              </label>
                              <select
                                value={item.qty}
                                className="max-w-full rounded-md border border-gray-300 px-3 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                onChange={() => {}}
                              >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                              </select>

                              <div className="absolute top-0 right-0">
                                <button
                                  type="button"
                                  className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                >
                                  <span className="sr-only">Remove</span>
                                  <XIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </section>
            )}
            {!isEmpty && (
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

                <dl className="mt-6 space-y-4">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <div className="text-right">
                      {carts &&
                        carts.map((item, index) => (
                          <div
                            key={index + 1}
                            className="border-b pb-2 text-sm font-medium text-gray-900"
                          >
                            <p className="border-none text-right text-[18px]">
                              <NumberFormat
                                thousandSeparator={true}
                                thousandsGroupStyle="thousand"
                                value={item.product.price}
                                suffix={' đ'}
                                className="border-none bg-gray-50 text-right"
                              />
                            </p>
                            <p className="font-normal">x {item.qty}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd className="border-none text-right text-base font-medium text-gray-900">
                      <NumberFormat
                        thousandSeparator={true}
                        thousandsGroupStyle="thousand"
                        value={totalPrice()}
                        suffix={' đ'}
                        className="border-none bg-gray-50 text-right"
                      />
                    </dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <div
                    className="w-full cursor-pointer rounded-md border border-transparent bg-black py-3 px-4 text-center text-base font-medium text-white shadow-sm hover:bg-[#F58B74]"
                    onClick={() => setShowCheck(true)}
                  >
                    Checkout
                  </div>
                </div>
              </section>
            )}
          </form>
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
