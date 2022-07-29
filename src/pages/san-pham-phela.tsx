import { Product } from '@/components/Product';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export interface ProductPheLa {
  id: number;
  name: string;
  slug: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

const category: {
  id: number;
  name: string;
  ref: string;
  products: ProductPheLa[];
}[] = [
  {
    id: 1,
    name: 'SYPHON',
    ref: 'syphon',
    products: [
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
    ],
  },
  {
    id: 2,
    name: 'FRENCH PRESS',
    ref: 'frenchpress',
    products: [
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
    ],
  },
  {
    id: 3,
    name: 'MOKA POT',
    ref: 'mokapot',
    products: [
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
    ],
  },
  {
    id: 4,
    name: 'NITRO COLD BREW',
    ref: 'notrocoldbrew',
    products: [
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
    ],
  },
  {
    id: 5,
    name: 'V60',
    ref: 'v60',
    products: [
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
    ],
  },
  {
    id: 6,
    name: 'TRÂN CHÂU TƯƠI',
    ref: 'tranchautuoi',
    products: [
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
    ],
  },
  {
    id: 7,
    name: 'PHÊ LA PLUS',
    ref: 'phelaplus',
    products: [
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
      {
        id: 1,
        name: 'Ô LONG SỮA PHÊ LA',
        price: '55.000₫',
        slug: 'o-long-sua-phe-la',
        imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
        imageAlt: 'o long sua',
      },
    ],
  },
];

const SanPhamPhela = () => {
  const scroll = (ref: string) => {
    const e = document.getElementById(ref);
    e?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <Main
      meta={
        <Meta
          title="Sản Phẩm phela - Phela"
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className="w-screen p-4 pt-20 pb-[740px] md:flex md:pb-96 md:pt-24">
        <div className="overflow-auto border-solid border-[#be7352] md:w-[20%] md:border-r md:pt-20 md:pl-4">
          <div className="flex w-max flex-nowrap md:flex-col">
            {category.map((cate) => (
              <div key={cate.id} className="-ml-1 w-max">
                <div
                  className="w-full cursor-pointer px-3 pb-4 text-[14px]"
                  onClick={() => scroll(cate.ref)}
                >
                  {cate.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:max-w-[80%] md:pl-3">
          {category.map((cate) => (
            <div key={cate.id} className="w-max max-w-full pt-16" id={cate.ref}>
              <div className="w-full pb-4 text-[30px] font-semibold md:pl-2">
                {cate.name}
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
                {cate.products.map((product, index) => (
                  <Product product={product} key={index + 1} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default SanPhamPhela;
