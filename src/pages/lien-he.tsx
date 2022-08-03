import { useState } from 'react';
import { FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const blog = {
  title: 'LIÊN HỆ',
  srcImg: '/assets/images/MGL9672-scaled.jpg',
  altImg: 'post1',
};

export default function LienHe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  return (
    <Main
      meta={
        <Meta
          title="Page Not Found"
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className="w-full  pt-[61px] pb-[740px] md:pb-96">
        <Head src={blog.srcImg} alt={blog.altImg} title={blog.title} />
        <div className="mx-auto max-w-6xl px-3 pt-14 md:pt-[60px]">
          <div className="md:flex md:flex-col">
            <form className="px-4 py-10 shadow-[0_5px_20px_rgb(0,0,0,10%)] md:order-2 md:p-20">
              <h1 className="text-[30px] font-semibold">Liên hệ</h1>
              <p className="pt-7">
                Vui lòng điền đầy đủ thông tin theo yêu cầu để chúng tôi có thể
                hỗ trợ quý khách tốt nhất
              </p>
              <input
                className="h-[46px] w-full border-b border-zinc-300 pt-3 md:h-[60px]"
                type={'text'}
                placeholder="Họ và tên *"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="h-[46px] w-full border-b border-zinc-300 pt-3 md:h-[60px]"
                type={'email'}
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="h-[80px] w-full border-b border-zinc-300 pt-3 md:h-[150px]"
                placeholder="Nội dung"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-3xl bg-gradient-to-r from-[#be7352] to-[#ddc3af] py-2 text-[20px] font-semibold text-white"
              >
                Gửi
              </button>
            </form>
            <div className="px-2 pt-8 md:order-1">
              <h1 className="text-[30px] font-semibold">
                PHÊ LA - CHÚNG TÔI BÁN TRÀ Ô LONG ĐẶC SẢN ĐÀ LẠT
              </h1>
              <div className="flex items-center gap-4 py-2 md:pt-10">
                <div className="rounded-full bg-black p-3">
                  <FaMapMarkedAlt color="white" size={30} />
                </div>
                <div>
                  <p className="font-bold">Địa chỉ:</p>
                  <p>
                    Số 24 ngõ 128C Đại La, Phường Đồng Tâm, Quận Hai Bà Trưng,
                    Hà Nội
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-2">
                <div className="rounded-full bg-black p-3">
                  <FaPhoneAlt color="white" size={30} />
                </div>
                <div>
                  <p className="font-bold">Hotline:</p>
                  <p>19003013</p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-2 md:pb-20">
                <div className="rounded-full bg-black p-3">
                  <HiMail color="white" size={30} />
                </div>
                <div>
                  <p className="font-bold">Email:</p>
                  <p>info@phela.vn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
