/* eslint-disable react/no-children-prop */
/* eslint-disable tailwindcss/no-custom-classname */

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const blog = {
  title: 'Số 65 PHẠM NGỌC THẠCH, ĐỐNG ĐA, HÀ NỘI',
  srcImg: '/assets/images/DSC06584-scaled-1.jpg',
  altImg: 'post1',
};
const localpost = {
  address: 'Số 65 PHẠM NGỌC THẠCH, ĐỐNG ĐA, HÀ NỘI',
  phone: '0362 829 299',
  openat: '8:00 - 22:45',
  content: `Phê La chính thức ra mắt thị trường với cửa hàng đầu tiên tại Phạm Ngọc Thạch vào tháng 03/2021. Đi theo concept Cắm Trại – khác biệt so với các thương hiệu khác trên thị trường, Phê La đã tạo ra ấn tượng mạnh mẽ cho khách hàng nhờ những chất riêng và thiết kế độc đáo của mình.
  
  ![alt](https://res.cloudinary.com/cloubynghi/image/upload/v1659518827/PHE-LA-PHAM-NGOC-THACH_fnyry5.jpg)
  
  Với mặt tiền rộng rãi cùng cách trang trí khác biệt, Phê La đã thu hút được sự quan tâm đông đảo của các bạn trẻ đến quán để trải nghiệm và thưởng thức hương vị của trà Ô Long đặc sản Đà Lạt thơm ngon.
  `,
};

const HeThongCuaHang = () => {
  const [srcmap] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.630529406116!2d105.83029261533196!3d21.00744249388075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac7f0c40b639%3A0x368bae1a0a417e9a!2zNjUgUC5QaOG6oW0gTmfhu41jIFRo4bqhY2gsIEtpbSBMacOqbiwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1650857310733!5m2!1svi!2s'
  );
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
        <Head src={blog.srcImg} alt={blog.altImg} title={blog.title} />
        <div className="mx-auto max-w-6xl px-3 pt-10 md:pt-[60px]">
          <div className="md:flex md:gap-5">
            <div className="flex-[3]">
              <div className="h-[455px] md:flex-[3]">
                <iframe
                  src={srcmap}
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="pt-10">
                <article className="prose-lg prose max-w-full space-y-1 text-black md:prose-lg">
                  <ReactMarkdown
                    children={localpost.content}
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
                  <p className="text-[16px]">{localpost.address}</p>
                </li>
                <li className="border-b border-y-gray-400 py-4">
                  <label>Số điện thoại:</label>{' '}
                  <p className="text-[16px]">{localpost.phone}</p>
                </li>
                <li className="border-b border-y-gray-400 py-4">
                  <label>Giờ mở cửa:</label>{' '}
                  <p className="text-[16px]">{localpost.openat}</p>
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
