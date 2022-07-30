import Link from 'next/link';

/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: 'LỜI NHẮN TỪ SÀI GÒN',
    slug: '#',
    category: [
      { name: 'Phê La', href: '#' },
      { name: 'Tin Tức', href: '#' },
    ],
    description:
      'BẠN CÓ LỜI NHẮN TỪ PHÊ LA SÀI GÒN Cùng Phê La, bạn có thể thưởng thức những cốc trà Ô Long đậm vị ở bất kỳ nơi đâu! Phê La gửi bạn cách thức đặt mua các sản phẩm đóng chai/đóng lon tiện lợi: 🎶 Hình thức: Order trực tiếp qua Fanpage Phê La […]',
    imageUrl: '/assets/images/thong-bao-web-copy-scaled.jpg',
    date: '2022/07/29',
  },
  {
    title:
      'Ô LONG MÙA XUÂN – GỬI GẮM TINH HOA Ô LONG ĐẶC SẢN VÙNG ĐẤT B’LAO VỀ GIỮA LÒNG THỦ ĐÔ.',
    slug: '#',
    category: [{ name: 'Tin Tức', href: '#' }],
    description:
      'Vào dịp cuối năm này, Phê La gửi đến bạn Ô Long Mùa Xuân tới từ nông trường Phước Lạc tại B’Lao, Bảo Lộc, Lâm Đồng – nơi ngọn nguồn của tinh hoa về trà Ô Long đặc sản Đà Lạt. Từ nông trường Phước Lạc, qua mọi chu trình khép kín để đến tay […]',
    imageUrl: '/assets/images/Untitled-2.jpg',
    date: '2022/07/29',
  },
  {
    title:
      'Ô LONG PHIN GIẤY PHÊ LA: MANG TRẢI NGHIỆM THỦ CÔNG “VỪA LẠ VỪA QUEN” TỚI MỌI NƠI.',
    slug: '#',
    category: [{ name: 'Tin Tức', href: '#' }],
    description:
      'Nhắc tới phương pháp pha phin giấy, mọi người thường nghĩ đến cách thức pha cà phê tiện dụng, đậm đà và có thể sử dụng bất cứ đâu. Còn với Phê La, phương pháp phin giấy để dành cho trà Ô Long đặc sản Đà Lạt. Vào ngày 15/12/2021 vừa rồi, Phê La chính […]',
    imageUrl: '/assets/images/1812-07-scaled.jpg',
    date: '2022/07/29',
  },
  {
    title: 'TRÂN CHÂU TƯƠI THỦ CÔNG ĐÃ CÓ TẠI PHÊ LA',
    slug: '#',
    category: [{ name: 'Tin Tức', href: '#' }],
    description:
      '“Phê La đã có trân châu chưa?”  – Đây có lẽ là câu hỏi Phê La nhận được nhiều khi các bạn đặt hàng. Trân châu Ô Long và trân châu gạo rang chính là câu trả lời Phê La muốn gửi đến các bạn. Phê La luôn mang tinh thần thủ công và đặc […]',
    imageUrl: '/assets/images/anh-tran-chau-350x250-01-scaled.jpg',
    date: '2022/07/29',
  },
];

export default function TinTucNoiBat() {
  return (
    <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-[22px] font-bold tracking-tight text-gray-900">
            TIN TỨC NỔI BẬT
          </h2>
        </div>
        <div className="mx-auto mt-4 grid max-w-lg gap-5 md:max-w-none md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg p-4 shadow-lg md:first:col-[1/4] md:first:h-[622px]"
            >
              <div className="shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-auto"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white pt-8">
                <div className="flex-1">
                  <p className="text-sm font-medium ">
                    {post.category.map((cate, index) => (
                      <Link key={index + 1} href={cate.href}>
                        <a className="mr-2 bg-[#73CCC6] px-3 py-1 text-white">
                          {cate.name}
                        </a>
                      </Link>
                    ))}
                  </p>
                  <a href={`/${post.date}/${post.slug}`} className="mt-2 block">
                    <p className="text-ellipsis pt-4 text-[18px] font-semibold text-gray-900 line-clamp-2">
                      {post.title}
                    </p>

                    <p className="mb-2 text-ellipsis pt-5 text-base text-gray-500 line-clamp-3">
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
