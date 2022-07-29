import Image from 'next/image';
import Link from 'next/link';

/* This example requires Tailwind CSS v2.0+ */
const products = [
  {
    id: 1,
    name: 'Ô LONG SỮA PHÊ LA',
    price: '55.000₫',
    slug: 'o-long-sua-phe-la',
    imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
    imageAlt: 'o long sua',
  },
  {
    id: 2,
    name: 'PHAN XI PĂNG',
    price: '55.000₫',
    slug: 'o-long-sua-phe-la',
    imageSrc: '/assets/images/phanxipan-scaled-1-300x300.jpg',
    imageAlt: 'phan xi pang',
  },
  {
    id: 3,
    name: "KHÓI B'LAO",
    price: '55.000₫',
    slug: 'o-long-sua-phe-la',
    imageSrc: '/assets/images/khoi-blao-300x300.png',
    imageAlt: 'khoi blao',
  },
  {
    id: 4,
    name: 'TRÂN CHÂU Ô LONG',
    price: '10.000₫',
    slug: 'o-long-sua-phe-la',
    imageSrc: '/assets/images/ol-300x300.jpg',
    imageAlt: 'tran chau o long',
  },
  {
    id: 5,
    name: 'TRÂN CHÂU GẠO RANG',
    price: '10.000₫',
    slug: 'o-long-sua-phe-la',
    imageSrc: '/assets/images/gr-300x300.jpg',
    imageAlt: 'tran chau gao rang',
  },
  {
    id: 6,
    name: 'ĐỈNH PHÙ VÂN (GU ĐẬM)',
    price: '140.000₫',
    slug: 'o-long-sua-phe-la',
    imageSrc: '/assets/images/2021-08-30-13.46.20-300x300.jpg',
    imageAlt: 'dinh phu van',
  },
  // More products...
];

export default function TitleTwo() {
  return (
    <div className="mx-auto max-w-[1180px] bg-white">
      <div className="mx-auto max-w-2xl py-9 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-center">
          <h2 className="mx-2 text-3xl font-semibold tracking-tighter">
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
                    <h3 className="text-left text-sm font-semibold">
                      {product.name}
                    </h3>
                  </a>
                </Link>

                <div>
                  <p className="mt-1 pt-8 text-left text-sm font-medium text-[#be7352]">
                    {product.price}
                  </p>
                </div>

                <div className="mt-4 w-max rounded-sm bg-[#DDC3AF] py-3 px-8 text-white">
                  <Link href={`/product/${product.slug}`}>
                    <a>Chi tiết</a>
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
