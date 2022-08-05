import axios from 'axios';
import { API_URL } from 'config';
import type { Product } from 'config/productConfig';
import type { GetStaticProps } from 'next';

import { BannerOne } from '@/components/index/Banner-1';
import { BannerTwo } from '@/components/index/Banner-2';
import CacDongSPNB from '@/components/index/CacDongSPNB';
import Head from '@/components/index/Head';
import HTCuaHang from '@/components/index/HTCuaHang';
import TinTucNoiBat from '@/components/index/TinTucNB';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface Iprops {
  products: Product[];
}

export default function Index(props: Iprops) {
  const { products } = props;
  return (
    <Main
      meta={
        <Meta
          title="Phela"
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className="pt-14 pb-[740px] md:pb-96 md:pt-[60px]">
        <Head />
        <BannerOne />
        <CacDongSPNB products={products} />
        <BannerTwo />
        <TinTucNoiBat />
        <HTCuaHang />
      </div>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(`${API_URL}/products`);
  const products = res.data;
  return {
    props: {
      products,
    },
  };
};
