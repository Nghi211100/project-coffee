/* eslint-disable react/no-children-prop */
/* eslint-disable tailwindcss/no-custom-classname */

import type { Address } from 'config/localtionConfig';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const address: Address = {
  addr: 'Số 7 Nguyễn Chí Thanh, thành phố Đà Lạt, tỉnh Lâm Đồng',
  phone: 'Số điện thoại: 0354 485 559',
  src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62455.62769938432!2d108.3665409582031!3d11.941459500000029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317113eb9941bec9%3A0x5cf171c5dd148869!2zUGjDqiBMYSDEkMOgIEzhuqF0!5e0!3m2!1sen!2s!4v1654743171641!5m2!1sen!2s',
  slug: 'so-7-nguyen-chi-thanh',
  srcImg: '/assets/images/Untitled-1.jpg',
  altImg: 'nguyen-chi-thanh',
  openAt: '8:00 - 22:45',
  content:
    'Phê La chính thức ra mắt thị trường với cửa hàng đầu tiên tại Phạm Ngọc Thạch vào tháng 03/2021. Đi theo concept Cắm Trại – khác biệt so với các thương hiệu khác trên thị trường, Phê La đã tạo ra ấn tượng mạnh mẽ cho khách hàng nhờ những chất riêng và thiết kế độc đáo của mình.\n\n![alt](https://res.cloudinary.com/cloubynghi/image/upload/v1659518827/PHE-LA-PHAM-NGOC-THACH_fnyry5.jpg)\n\nVới mặt tiền rộng rãi cùng cách trang trí khác biệt, Phê La đã thu hút được sự quan tâm đông đảo của các bạn trẻ đến quán để trải nghiệm và thưởng thức hương vị của trà Ô Long đặc sản Đà Lạt thơm ngon.\n\n',
};

const HeThongCuaHang = () => {
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
