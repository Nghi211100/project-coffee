import { BannerOne } from '@/components/index/Banner-1';
import { BannerTwo } from '@/components/index/Banner-2';
import CacDongSPNB from '@/components/index/CacDongSPNB';
import Head from '@/components/index/Head';
import HTCuaHang from '@/components/index/HTCuaHang';
import TinTucNoiBat from '@/components/index/TinTucNB';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import data from './api/products/data.json';

export default function Index() {
  const { products } = data;
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
        <CacDongSPNB products={products.slice(0, 6)} />
        <BannerTwo />
        <TinTucNoiBat />
        <HTCuaHang />
      </div>
    </Main>
  );
}
