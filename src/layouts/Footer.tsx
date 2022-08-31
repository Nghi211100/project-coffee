import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  about: [
    { name: 'Cửa hàng', href: '/san-pham-phela' },
    { name: 'Về Phê La', href: '/ve-chung-toi' },
    { name: 'Hệ thống cửa hàng', href: '/he-thong-cua-hang' },
  ],
  address: [
    {
      name: 'Số 24 ngõ 128C Đại La, Phường Đồng Tâm, Quận Hai Bà Trưng, Hà Nội',
    },
    { name: 'LUÔN SẴN SÀNG HỖ TRỢ' },
    { name: 'Hotline: 1900 3013' },
  ],
  lienhe: [
    {
      name: 'Xin vui lòng để lại địa chỉ email, chúng tôi sẽ cập nhật những tin tức mới nhất của Phê La',
    },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-primary-default" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 md:pt-4 lg:px-8">
        <div className="md:flex">
          <div className="space-y-8 md:flex-[1] md:pt-5 xl:col-span-1">
            <Link href="/">
              <a>
                <div className="flex items-center">
                  <Image
                    src={'/favicon-phela.png'}
                    width={131}
                    height={85}
                    alt="icon"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="mt-6 flex flex-col gap-y-8 md:flex-[3] md:flex-row md:gap-x-8 xl:col-span-2 xl:mt-0">
            <div className="md:flex-[1] ">
              <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white">
                VỀ CHÚNG TÔI
              </h3>
              <ul role="list" className="my-2 space-y-1">
                {navigation.about.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[14px] text-gray-400 hover:text-gray-600"
                    >
                      &gt; {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:flex-[3] ">
              <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white">
                ĐỊA CHỈ CÔNG TY:
              </h3>
              <ul role="list" className="my-2 space-y-1">
                {navigation.address.map((item) => (
                  <li key={item.name}>
                    <div className="text-[14px] text-gray-400">{item.name}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:flex-[2] ">
              <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white">
                NHẬN THÔNG TIN TỪ PHÊ LA
              </h3>
              <ul role="list" className="my-2 space-y-1">
                {navigation.lienhe.map((item) => (
                  <li key={item.name}>
                    <div className="text-[14px] text-gray-400">{item.name}</div>
                  </li>
                ))}
              </ul>
              <div className="flex rounded-3xl border border-white bg-white">
                <div className="flex-[4] p-2">
                  <input
                    className="w-full rounded-l-3xl bg-transparent px-1 text-[13px]"
                    type={'email'}
                    placeholder="Nhập email của bạn ..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-[1] cursor-pointer items-center justify-center rounded-r-3xl bg-primary-default p-2 text-center text-white hover:bg-primary-hover">
                  <input
                    className="cursor-pointer"
                    type={'button'}
                    value="Gửi"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-11 border-t border-gray-200 py-4">
          <p className="text-center text-[14px] text-gray-400 xl:text-center">
            &copy; 2020 Bản quyền thuộc phela.vn
          </p>
        </div>
      </div>
    </footer>
  );
}
