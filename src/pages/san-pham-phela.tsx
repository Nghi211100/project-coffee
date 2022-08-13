import { useQuery } from '@apollo/client';
import { getAllCategories } from 'graphql-client/queries';

import { Product } from '@/components/Product';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const SanPhamPhela = () => {
  const scroll = (slug: string) => {
    const e = document.getElementById(slug);

    e?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const { data, loading } = useQuery(getAllCategories);

  const categories = data !== undefined ? data.categories.edges : [];

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
            {categories.map((cate: any) => (
              <div key={cate.node.id} className="-ml-1 w-max">
                <div
                  className="w-full cursor-pointer px-3 pb-4 text-[14px]"
                  onClick={() => scroll(cate.node.slug)}
                >
                  {cate.node.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:max-w-[80%] md:pl-3">
          {loading === true && <p>Sản phẩm đang được tải lên...</p>}
          {categories.map((cate: any) => (
            <div
              key={cate.node.id}
              className="w-max max-w-full pt-16"
              id={cate.node.slug}
            >
              <div className="w-full pb-4 text-[30px] font-semibold md:pl-2">
                {cate.node.name}
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
                {cate.node.products ? (
                  cate.node.products.edges.map((product: any) => (
                    <Product product={product.node} key={product.node.id} />
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default SanPhamPhela;
