import type { Product } from 'config/productConfig';
import Image from 'next/image';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

interface Iprops {
  products: Product[];
}

export default function CacDongSPNB(props: Iprops) {
  const { products } = props;

  return (
    <div className="mx-auto max-w-[1180px] bg-white">
      <div className="mx-auto max-w-2xl py-9 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-center">
          <h2 className="mx-2 text-center text-3xl font-semibold tracking-tighter">
            CÁC DÒNG SẢN PHẨM NỔI BẬT
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 pt-6 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group shadow-[0_5px_20px_rgba(0,0,0,0.1)] md:pb-6 md:shadow-none"
            >
              <Link href={`/product/${product.slug}`}>
                <a>
                  <div className="h-max w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
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
                    <h3 className="text-left text-[15px] font-semibold">
                      {product.name}
                    </h3>
                  </a>
                </Link>

                <div>
                  <p className="mt-1 pt-8 text-left text-[16px] font-medium text-[#be7352]">
                    <NumberFormat
                      thousandSeparator={true}
                      thousandsGroupStyle="thousand"
                      value={product.price}
                      suffix={' đ'}
                    />
                  </p>
                </div>

                <div className="mt-4 w-max ">
                  <Link href={`/product/${product.slug}`}>
                    <a className="rounded-sm bg-[#DDC3AF] py-3 px-8 text-white">
                      Chi tiết
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-20">
          <Link href={'/san-pham-phela'}>
            <a className="w-max rounded-sm bg-[#DDC3AF] py-4 px-8 text-white">
              Xem thêm
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
