import axios from 'axios';
import { API_URL } from 'config';
import type { Category } from 'config/productConfig';
import type { GetStaticProps } from 'next';

import { Product } from '@/components/Product';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface Iprops {
  categories: Category[];
}

const SanPhamPhela = (props: Iprops) => {
  const scroll = (slug: string) => {
    const e = document.getElementById(slug);

    e?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const { categories } = props;
  return (
    <Main
      meta={
        <Meta
          title="Sản Phẩm phela - Phela"
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className="mx-auto w-screen max-w-7xl p-4 pt-20 pb-[740px] md:flex md:pb-96 md:pt-24">
        <div className="overflow-auto border-solid border-[#be7352] md:w-[20%] md:border-r md:pt-20 md:pl-4">
          <div className="flex w-max flex-nowrap md:flex-col">
            {categories.map((cate) => (
              <div key={cate.id} className="-ml-1 w-max">
                <div
                  className="w-full cursor-pointer px-3 pb-4 text-[14px]"
                  onClick={() => scroll(cate.slug)}
                >
                  {cate.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:max-w-[80%] md:pl-3">
          {categories.map((cate) => (
            <div
              key={cate.id}
              className="w-max max-w-full pt-16"
              id={cate.slug}
            >
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

export const getStaticProps: GetStaticProps = async () => {
  const resCate = await axios.get(`${API_URL}/products/categories`);
  const categories = resCate.data;
  return {
    props: {
      categories,
    },
  };
};
