/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';

import BVNB from '@/components/blog/BVNB';
import { Head } from '@/components/blog/Head';
import { Post } from '@/components/Post';
import Title from '@/components/product-slug/Title';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import type { ProductPheLa } from './san-pham-phela';
import type { Blog as POST } from './ve-chung-toi';

const blog = {
  title: 'SỰ KIỆN',
  srcImg: '/assets/images/DSC09515.jpg',
  altImg: 'post1',
};

const posts: POST[] = [
  {
    title: 'LỜI NHẮN TỪ SÀI GÒN',
    slug: 'loi-nhan-tu-sai-gon',
    category: [
      { name: 'Phê La', slug: '#' },
      { name: 'Tin Tức', slug: '#' },
    ],
    content:
      'BẠN CÓ LỜI NHẮN TỪ PHÊ LA SÀI GÒN Cùng Phê La, bạn có thể thưởng thức những cốc trà Ô Long đậm vị ở bất kỳ nơi đâu! Phê La gửi bạn cách thức đặt mua các sản phẩm đóng chai/đóng lon tiện lợi: 🎶 Hình thức: Order trực tiếp qua Fanpage Phê La […]',
    srcImg: '/assets/images/thong-bao-web-copy-scaled.jpg',
    altImg: 'post1',
    date: '2022/07/29',
  },
  {
    title:
      'Ô LONG MÙA XUÂN – GỬI GẮM TINH HOA Ô LONG ĐẶC SẢN VÙNG ĐẤT B’LAO VỀ GIỮA LÒNG THỦ ĐÔ.',
    slug: 'o-long-mua-xuan',
    category: [{ name: 'Tin Tức', slug: '#' }],
    content:
      'Vào dịp cuối năm này, Phê La gửi đến bạn Ô Long Mùa Xuân tới từ nông trường Phước Lạc tại B’Lao, Bảo Lộc, Lâm Đồng – nơi ngọn nguồn của tinh hoa về trà Ô Long đặc sản Đà Lạt. Từ nông trường Phước Lạc, qua mọi chu trình khép kín để đến tay […]',
    srcImg: '/assets/images/Untitled-2.jpg',
    altImg: 'post2',
    date: '2022/07/29',
  },
  {
    title:
      'Ô LONG PHIN GIẤY PHÊ LA: MANG TRẢI NGHIỆM THỦ CÔNG “VỪA LẠ VỪA QUEN” TỚI MỌI NƠI.',
    slug: 'o-long-phin-giay-den',
    category: [{ name: 'Tin Tức', slug: '#' }],
    content:
      'Nhắc tới phương pháp pha phin giấy, mọi người thường nghĩ đến cách thức pha cà phê tiện dụng, đậm đà và có thể sử dụng bất cứ đâu. Còn với Phê La, phương pháp phin giấy để dành cho trà Ô Long đặc sản Đà Lạt. Vào ngày 15/12/2021 vừa rồi, Phê La chính […]',
    srcImg: '/assets/images/1812-07-scaled.jpg',
    date: '2022/07/29',
    altImg: 'post3',
  },
  {
    title: 'TRÂN CHÂU TƯƠI THỦ CÔNG ĐÃ CÓ TẠI PHÊ LA',
    slug: 'tran-chau-tuoi',
    category: [{ name: 'Tin Tức', slug: '#' }],
    content:
      '“Phê La đã có trân châu chưa?”  – Đây có lẽ là câu hỏi Phê La nhận được nhiều khi các bạn đặt hàng. Trân châu Ô Long và trân châu gạo rang chính là câu trả lời Phê La muốn gửi đến các bạn. Phê La luôn mang tinh thần thủ công và đặc […]',
    srcImg: '/assets/images/anh-tran-chau-350x250-01-scaled.jpg',
    altImg: 'post4',
    date: '2022/07/29',
  },
  {
    title: 'TRÂN CHÂU TƯƠI THỦ CÔNG ĐÃ CÓ TẠI PHÊ LA',
    slug: 'tran-chau-tuoi',
    category: [{ name: 'Tin Tức', slug: '#' }],
    content:
      '“Phê La đã có trân châu chưa?”  – Đây có lẽ là câu hỏi Phê La nhận được nhiều khi các bạn đặt hàng. Trân châu Ô Long và trân châu gạo rang chính là câu trả lời Phê La muốn gửi đến các bạn. Phê La luôn mang tinh thần thủ công và đặc […]',
    srcImg: '/assets/images/anh-tran-chau-350x250-01-scaled.jpg',
    altImg: 'post5',
    date: '2022/07/29',
  },
  {
    title: 'TRÂN CHÂU TƯƠI THỦ CÔNG ĐÃ CÓ TẠI PHÊ LA',
    slug: 'tran-chau-tuoi',
    category: [{ name: 'Tin Tức', slug: '#' }],
    content:
      '“Phê La đã có trân châu chưa?”  – Đây có lẽ là câu hỏi Phê La nhận được nhiều khi các bạn đặt hàng. Trân châu Ô Long và trân châu gạo rang chính là câu trả lời Phê La muốn gửi đến các bạn. Phê La luôn mang tinh thần thủ công và đặc […]',
    srcImg: '/assets/images/anh-tran-chau-350x250-01-scaled.jpg',
    altImg: 'post6',
    date: '2022/07/29',
  },
];

const products: ProductPheLa[] = [
  {
    id: 1,
    name: 'Ô LONG SỮA PHÊ LA',
    price: '55.000₫',
    slug: 'o-long-sua-phe-la',
    imageSrc: '/assets/images/o-long-sua-scaled-1-300x300.jpg',
    imageAlt: 'o long sua',
  },
  {
    id: 2,
    name: 'PHAN XI PĂNG',
    price: '55.000₫',
    slug: 'o-long-sua-phe-la',
    imageSrc: '/assets/images/phanxipan-scaled-1-600x600.jpg',
    imageAlt: 'phan xi pang',
  },
  {
    id: 3,
    name: "KHÓI B'LAO",
    price: '55.000₫',
    slug: 'o-long-sua-phe-la',
    imageSrc: '/assets/images/khoi-blao-600x600.png',
    imageAlt: 'khoi blao',
  },
  {
    id: 4,
    name: 'TRÂN CHÂU Ô LONG',
    price: '10.000₫',
    slug: 'o-long-sua-phe-la',
    imageSrc: '/assets/images/ol-600x600.jpg',
    imageAlt: 'tran chau o long',
  },
  // More products...
];

const SuKien = () => {
  return (
    <Main
      meta={
        <Meta
          title="Sự Kiện - Phela"
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className="w-full  pt-[61px] pb-[740px] md:pb-96">
        <Head src={blog.srcImg} alt={blog.altImg} title={blog.title} />
        <div className="mx-auto max-w-6xl px-3 pt-14  md:pt-[60px]">
          <div className="flex items-center gap-x-2">
            <Link href="/">
              <a className="text-[15px] text-amber-700 md:text-[18px]">
                Phela &gt;
              </a>
            </Link>
            <h3 className="text-[13px] md:text-[16px]">Sự kiện</h3>
          </div>
          <div className="mx-auto mt-4 grid max-w-lg gap-3 pb-10 md:max-w-none md:grid-cols-3">
            {posts.map((post, index) => (
              <div
                key={index + 1}
                className="flex flex-col gap-1 overflow-hidden md:h-[380px]"
              >
                <Post post={post} />
              </div>
            ))}
          </div>
          <div className="py-10">
            <BVNB posts={posts} title="BÀI VIẾT NỔI BẬT" />
          </div>
          <div className="py-10">
            <Title products={products} title="SẢN PHẨM NỔI BẬT" />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SuKien;
