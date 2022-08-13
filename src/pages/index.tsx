/* eslint-disable no-restricted-globals */
import * as React from 'react';

import { BannerOne } from '@/components/index/Banner-1';
import { BannerTwo } from '@/components/index/Banner-2';
import CacDongSPNB from '@/components/index/CacDongSPNB';
import Head from '@/components/index/Head';
import HTCuaHang from '@/components/index/HTCuaHang';
import TinTucNoiBat from '@/components/index/TinTucNB';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function Index() {
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
        <CacDongSPNB />
        <BannerTwo />
        <TinTucNoiBat />
        <HTCuaHang />
      </div>
    </Main>
  );
}
