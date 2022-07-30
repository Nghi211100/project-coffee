import { BannerOne } from '@/components/main-index/Banner-1';
import { BannerTwo } from '@/components/main-index/Banner-2';
import CacDongSPNB from '@/components/main-index/CacDongSPNB';
import Head from '@/components/main-index/Head';
import HTCuaHang from '@/components/main-index/HTCuaHang';
import TinTucNoiBat from '@/components/main-index/TinTucNB';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
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
};

export default Index;
