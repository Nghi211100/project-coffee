/* eslint-disable react/no-children-prop */
/* eslint-disable tailwindcss/no-custom-classname */

import axios from 'axios';
import { API_URL } from 'config';
import type { Address } from 'config/localtionConfig';
import type { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface Iprops {
  address: Address;
}

const HeThongCuaHang = (props: Iprops) => {
  const { address } = props;
  return (
    <Main
      meta={
        <Meta
          title="Hệ thống cửa hàng - Phela"
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className="w-full  pt-[61px] pb-[740px] md:pb-96">
        <Head src={address.srcImg} alt={address.altImg} title={address.addr} />
        <div className="mx-auto max-w-6xl px-3 pt-10 md:pt-[60px]">
          <div className="md:flex md:gap-5">
            <div className="flex-[3]">
              <div className="h-[455px] md:flex-[3]">
                <iframe
                  src={address.src}
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="pt-10">
                <article className="prose-lg prose max-w-full space-y-1 text-black md:prose-lg">
                  <ReactMarkdown
                    children={address.content}
                    remarkPlugins={[remarkGfm]}
                  />
                </article>
              </div>
            </div>
            <div className="mt-5 h-max flex-[1] bg-[#F8F8F8] py-10 px-8">
              <h1 className="text-[24px] font-medium">THÔNG TIN CỬA HÀNG</h1>
              <ul className="pt-2 text-[18px] font-medium">
                <li className="border-b border-y-gray-400 py-4">
                  <label>Địa chỉ:</label>{' '}
                  <p className="text-[16px]">{address.addr}</p>
                </li>
                <li className="border-b border-y-gray-400 py-4">
                  <label>Số điện thoại:</label>{' '}
                  <p className="text-[16px]">{address.phone}</p>
                </li>
                <li className="border-b border-y-gray-400 py-4">
                  <label>Giờ mở cửa:</label>{' '}
                  <p className="text-[16px]">{address.openAt}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HeThongCuaHang;

export const getServerSideProps: GetServerSideProps = async ({
  query: { slug },
}) => {
  const res = await axios.get(`${API_URL}/location/${slug}`);
  const address = res.data;
  return {
    props: {
      address,
    },
  };
};
