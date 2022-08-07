import type { Product as ProductSingle } from 'config/productConfig';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NumberFormat from 'react-number-format';

interface Iprops {
  product: ProductSingle;
}

export const Product = (props: Iprops) => {
  const { product } = props;
  return (
    <div
      key={product.id}
      className="group w-full shadow-[0_5px_20px_rgba(0,0,0,0.1)] md:pb-6 md:shadow-none"
    >
      <Link href={`/product/${product.slug}`}>
        <a>
          <div className="h-max w-full overflow-hidden rounded-md p-3 group-hover:opacity-75 lg:h-72 xl:h-80">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              height={400}
              width={400}
            />
          </div>
        </a>
      </Link>

      <div className="p-3 ">
        <Link href={`/product/${product.slug}`}>
          <a className="text-black">
            <h3 className="text-left text-sm font-semibold">{product.name}</h3>
          </a>
        </Link>

        <div>
          <p className="mt-1 pt-8 text-left text-sm font-medium text-[#be7352]">
            <NumberFormat
              thousandSeparator={true}
              thousandsGroupStyle="thousand"
              value={product.price}
              suffix={' đ'}
              className="w-full"
            />
          </p>
        </div>

        <div className="w-max py-4">
          <Link href={`/product/${product.slug}`}>
            <a className="rounded-sm bg-[#DDC3AF] py-3 px-8 text-white">
              MUA NGAY
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
