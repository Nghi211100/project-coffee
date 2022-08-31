import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NumberFormat from 'react-number-format';

interface Iprops {
  product: any;
}

export const Product = (props: Iprops) => {
  const { product } = props;

  return (
    <div className="group w-full shadow-[0_5px_20px_rgba(0,0,0,0.1)] md:pb-6 md:shadow-none">
      <Link href={`/product/${product.slug}`}>
        <a>
          <div className="h-max w-full overflow-hidden rounded-md p-3 group-hover:opacity-75 lg:h-72 xl:h-80">
            <Image
              src={product.thumbnail.url}
              alt={product.thumbnail.alt}
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
              value={product.pricing.priceRange.start.net.amount}
              suffix={' đ'}
              className="w-full"
            />
          </p>
        </div>

        <div className="w-max py-4">
          <Link href={`/product/${product.slug}`}>
            <a className="rounded-sm bg-primary-default py-3 px-8 text-white hover:bg-primary-hover">
              MUA NGAY
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
