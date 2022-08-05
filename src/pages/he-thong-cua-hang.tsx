/* eslint-disable tailwindcss/no-custom-classname */

import axios from 'axios';
import type { Category } from 'config/localtionConfig';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { GiPositionMarker } from 'react-icons/gi';

import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const head = {
  title: 'HỆ THỐNG CỬA HÀNG',
  srcImg: '/assets/images/DSC09570-scaled.jpg',
  altImg: 'post1',
};

const addressDL = [
  {
    title: 'Nguyễn Chí Thanh',
    addr: 'Số 7 Nguyễn Chí Thanh, thành phố Đà Lạt, tỉnh Lâm Đồng',
    phone: 'Số điện thoại: 0354 485 559',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62455.62769938432!2d108.3665409582031!3d11.941459500000029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317113eb9941bec9%3A0x5cf171c5dd148869!2zUGjDqiBMYSDEkMOgIEzhuqF0!5e0!3m2!1sen!2s!4v1654743171641!5m2!1sen!2s',
    slug: 'so-7-nguyen-chi-thanh',
  },
];
const addressHN = [
  {
    title: 'Cầu Giấy',
    addr: 'Số N04 - B1 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội',
    phone: 'Số điện thoại: 039 397 5559',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0742145686168!2d105.79014061386148!3d21.029716293123954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4f381149c7%3A0xa2b9a532a5e85d41!2sN04-B1%20Dich%20Vong!5e0!3m2!1sen!2s!4v1653551666804!5m2!1sen!2s',
    slug: 'so-n04-b1-thanh-thai',
  },
  {
    title: 'Hai Bà Trưng',
    addr: 'Số 24, 128C Đại La, Đồng Tâm, Hai Bà Trưng, Hà Nội',
    phone: 'Số điện thoại: 0396 590 559',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8800683796694!2d105.84103761533183!3d20.997444094221617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac70319f312b%3A0xdd7af05de9018d69!2zMjQgTmdoLiAxMjhDIFAuIMSQ4bqhaSBMYSwgxJDhu5NuZyBUw6JtLCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1650856431303!5m2!1svi!2s',
    slug: 'so-24-128c-dai-la',
  },
  {
    title: 'Đống Đa',
    addr: 'Số 14 Đặng Tiến Đông, Trung Liệt, Đống Đa, Hà Nội',
    phone: 'Số điện thoại: 0338 845 559',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4758458781366!2d105.81912401533195!3d21.01363799366935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7c4ed2ea07%3A0x488d87e1945a9995!2zMTQgUC4gxJDhurduZyBUaeG6v24gxJDDtG5nLCBUcnVuZyBMaeG7h3QsIMSQ4buRbmcgxJBhLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1650856565463!5m2!1svi!2s',
    slug: 'so-14-dang-tien-dong',
  },
  {
    title: 'Hoàn Kiếm',
    addr: '24 Hàng Cót, Hàng Mã, Hoàn Kiếm, Hà Nội',
    phone: 'Số điện thoại: 0365 335 559',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8612885435796!2d105.84483955111229!3d21.038235492760414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb967500f4d%3A0xfa11005353ae33a9!2zMjQgSMOgbmcgQ8OzdCwgSMOgbmcgTcOjLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1641192570017!5m2!1svi!2s',
    slug: 'so-24-hang-cot',
  },
  {
    title: 'Hoàn Kiếm',
    addr: '45B Lý Thường Kiệt, Hoàn Kiếm, Hà Nội',
    phone: 'Số điện thoại: 0354 369 390',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.235264018014!2d105.84786351533207!3d21.023270493340537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab930d5c3e61%3A0x3fc92aeb24c65fda!2zNDVCIEzDvSBUaMaw4budbmcgS2nhu4d0LCBUcuG6p24gSMawbmcgxJDhuqFvLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1626749576658!5m2!1sen!2s',
    slug: 'so-45b-ly-thuong-kiet',
  },
  {
    title: 'Đống Đa',
    addr: 'Số 65 Phạm Ngọc Thạch, Đống Đa, Hà Nội',
    phone: 'Số điện thoại: 0362 829 299',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.630529406116!2d105.83029261533196!3d21.00744249388075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac7f0c40b639%3A0x368bae1a0a417e9a!2zNjUgUC5QaOG6oW0gTmfhu41jIFRo4bqhY2gsIEtpbSBMacOqbiwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1650857310733!5m2!1svi!2s',
    slug: 'so-65-pham-ngoc-thach',
  },
];
const addressHCM = [
  {
    title: 'Quận Bình Thạnh',
    addr: 'Số 193/1 Điện Biên Phủ, phường 15, Quận Bình Thạnh, Thành phố Hồ Chí Minh (Coming Soon)',
    phone: 'Số điện thoại: ',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2270136158445!2d106.69843941446541!3d10.793917492309653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b5e5274911%3A0x66aefc94c7b62be6!2zMTkzLCAxIMSQaeG7h24gQmnDqm4gUGjhu6csIFBoxrDhu51uZyAxNSwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1657514506425!5m2!1sen!2s',
    slug: 'so-193-1-dien-bien-phu',
  },
  {
    title: 'Quận 1',
    addr: 'Số 6 Trương Định, Phường Bến Thành, Quận 1, TP HCM',
    phone: 'Số điện thoại: 0865035559',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.522290535599!2d106.69448461446521!3d10.771251992325036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3ee3c37b0b%3A0xc261ff920bed2f8a!2zNiBUcsawxqFuZyDEkOG7i25oLCBQaMaw4budbmcgQuG6v24gVGjDoG5oLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1658377287687!5m2!1sen!2s',
    slug: 'so-6-truong-dinh',
  },
  {
    title: 'Quận 1',
    addr: '125 Hồ Tùng Mậu, Bến Nghé, Quận 1, TP HCM',
    phone: 'Số điện thoại: 0867095559',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.494183882552!2d106.70061321446529!3d10.773411492323552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f472789ec63%3A0x4222af253df652b7!2zMTI1IMSQLiBI4buTIFTDuW5nIE3huq11LCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1657339400735!5m2!1sen!2s',
    slug: 'so-125-ho-tung-mau',
  },
];

// const posts: POST[] = [
//   {
//     title: 'LỜI NHẮN TỪ SÀI GÒN',
//     slug: '#',
//     category: [
//       { name: 'Phê La', slug: '#' },
//       { name: 'Tin Tức', slug: '#' },
//     ],
//     content:
//       'BẠN CÓ LỜI NHẮN TỪ PHÊ LA SÀI GÒN Cùng Phê La, bạn có thể thưởng thức những cốc trà Ô Long đậm vị ở bất kỳ nơi đâu! Phê La gửi bạn cách thức đặt mua các sản phẩm đóng chai/đóng lon tiện lợi: 🎶 Hình thức: Order trực tiếp qua Fanpage Phê La […]',
//     srcImg: '/assets/images/thong-bao-web-copy-scaled.jpg',
//     altImg: 'post1',
//     date: '2022/07/29',
//   },
//   {
//     title:
//       'Ô LONG MÙA XUÂN – GỬI GẮM TINH HOA Ô LONG ĐẶC SẢN VÙNG ĐẤT B’LAO VỀ GIỮA LÒNG THỦ ĐÔ.',
//     slug: '#',
//     category: [{ name: 'Tin Tức', slug: '#' }],
//     content:
//       'Vào dịp cuối năm này, Phê La gửi đến bạn Ô Long Mùa Xuân tới từ nông trường Phước Lạc tại B’Lao, Bảo Lộc, Lâm Đồng – nơi ngọn nguồn của tinh hoa về trà Ô Long đặc sản Đà Lạt. Từ nông trường Phước Lạc, qua mọi chu trình khép kín để đến tay […]',
//     srcImg: '/assets/images/Untitled-2.jpg',
//     altImg: 'post2',
//     date: '2022/07/29',
//   },
//   {
//     title:
//       'Ô LONG PHIN GIẤY PHÊ LA: MANG TRẢI NGHIỆM THỦ CÔNG “VỪA LẠ VỪA QUEN” TỚI MỌI NƠI.',
//     slug: '#',
//     category: [{ name: 'Tin Tức', slug: '#' }],
//     content:
//       'Nhắc tới phương pháp pha phin giấy, mọi người thường nghĩ đến cách thức pha cà phê tiện dụng, đậm đà và có thể sử dụng bất cứ đâu. Còn với Phê La, phương pháp phin giấy để dành cho trà Ô Long đặc sản Đà Lạt. Vào ngày 15/12/2021 vừa rồi, Phê La chính […]',
//     srcImg: '/assets/images/1812-07-scaled.jpg',
//     date: '2022/07/29',
//     altImg: 'post3',
//   },
//   {
//     title: 'TRÂN CHÂU TƯƠI THỦ CÔNG ĐÃ CÓ TẠI PHÊ LA',
//     slug: '#',
//     category: [{ name: 'Tin Tức', slug: '#' }],
//     content:
//       '“Phê La đã có trân châu chưa?”  – Đây có lẽ là câu hỏi Phê La nhận được nhiều khi các bạn đặt hàng. Trân châu Ô Long và trân châu gạo rang chính là câu trả lời Phê La muốn gửi đến các bạn. Phê La luôn mang tinh thần thủ công và đặc […]',
//     srcImg: '/assets/images/anh-tran-chau-350x250-01-scaled.jpg',
//     altImg: 'post4',
//     date: '2022/07/29',
//   },
//   {
//     title: 'TRÂN CHÂU TƯƠI THỦ CÔNG ĐÃ CÓ TẠI PHÊ LA',
//     slug: '#',
//     category: [{ name: 'Tin Tức', slug: '#' }],
//     content:
//       '“Phê La đã có trân châu chưa?”  – Đây có lẽ là câu hỏi Phê La nhận được nhiều khi các bạn đặt hàng. Trân châu Ô Long và trân châu gạo rang chính là câu trả lời Phê La muốn gửi đến các bạn. Phê La luôn mang tinh thần thủ công và đặc […]',
//     srcImg: '/assets/images/anh-tran-chau-350x250-01-scaled.jpg',
//     altImg: 'post5',
//     date: '2022/07/29',
//   },
//   {
//     title: 'TRÂN CHÂU TƯƠI THỦ CÔNG ĐÃ CÓ TẠI PHÊ LA',
//     slug: '#',
//     category: [{ name: 'Tin Tức', slug: '#' }],
//     content:
//       '“Phê La đã có trân châu chưa?”  – Đây có lẽ là câu hỏi Phê La nhận được nhiều khi các bạn đặt hàng. Trân châu Ô Long và trân châu gạo rang chính là câu trả lời Phê La muốn gửi đến các bạn. Phê La luôn mang tinh thần thủ công và đặc […]',
//     srcImg: '/assets/images/anh-tran-chau-350x250-01-scaled.jpg',
//     altImg: 'post6',
//     date: '2022/07/29',
//   },
// ];

interface Iprops {
  categories: Category[];
}

const HeThongCuaHang = (props: Iprops) => {
  const { categories } = props;

  const [openDL, setOpenDL] = useState(false);
  const [openHN, setOpenHN] = useState(false);
  const [openHCM, setOpenHCM] = useState(false);
  const [srcmap, setSrcmap] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62455.62769938432!2d108.3665409582031!3d11.941459500000029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317113eb9941bec9%3A0x5cf171c5dd148869!2zUGjDqiBMYSDEkMOgIEzhuqF0!5e0!3m2!1sen!2s!4v1654743171641!5m2!1sen!2s'
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
        <Head src={head.srcImg} alt={head.altImg} title={head.title} />
        <div className="mx-auto max-w-6xl pt-14 md:pt-[60px]">
          <div className="md:flex">
            <div className="h-[455px] overflow-scroll bg-[#222222] p-8 text-white md:flex-[1]">
              <h1 className="text-center text-[25px] font-semibold">
                TÌM KIẾM CỬA HÀNG
              </h1>
              <ul className="w-full pt-6 text-[18px] font-medium">
                <li onClick={() => setOpenDL(!openDL)}>
                  <p
                    className={`${
                      !openDL && 'border-b'
                    } flex justify-between border-zinc-400`}
                  >
                    Chi nhánh Đà Lạt{' '}
                    <span className={`${openDL && 'rotate-90'} text-zinc-400`}>
                      &gt;
                    </span>
                  </p>
                  {openDL && (
                    <>
                      {addressDL.map((add) => (
                        <>
                          <div
                            onClick={() => setSrcmap(add.src)}
                            className="flex border-b border-dashed  border-zinc-400 py-3 text-[15px] ease-[cubic-bezier(0.45,0.05,0.55,0.95)]"
                          >
                            <div>
                              <GiPositionMarker size={25} />
                            </div>
                            <div>
                              <p>{add.addr}</p>
                              <p>{add.phone}</p>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  )}
                </li>
                <li onClick={() => setOpenHN(!openHN)} className="py-2">
                  <p
                    className={`${
                      !openHN && 'border-b'
                    } flex justify-between border-zinc-400`}
                  >
                    Chi nhánh Hà Nội{' '}
                    <span className={`${openHN && 'rotate-90'} text-zinc-400`}>
                      &gt;
                    </span>
                  </p>
                  {openHN && (
                    <>
                      {addressHN.map((add) => (
                        <>
                          <div
                            onClick={() => setSrcmap(add.src)}
                            className="flex border-b border-dashed border-zinc-400 py-3 text-[15px] ease-[cubic-bezier(0.45,0.05,0.55,0.95)]"
                          >
                            <div>
                              <GiPositionMarker size={25} />
                            </div>
                            <div>
                              <p>{add.addr}</p>
                              <p>{add.phone}</p>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  )}
                </li>
                <li onClick={() => setOpenHCM(!openHCM)}>
                  <p
                    className={`${
                      !openHCM && 'border-b'
                    } flex justify-between border-zinc-400`}
                  >
                    Chi nhánh Hồ Chí Minh{' '}
                    <span className={`${openHCM && 'rotate-90'} text-zinc-400`}>
                      &gt;
                    </span>
                  </p>
                  {openHCM && (
                    <>
                      {addressHCM.map((add) => (
                        <>
                          <div
                            onClick={() => setSrcmap(add.src)}
                            className="flex border-b border-dashed border-zinc-400  py-3 text-[15px] ease-[cubic-bezier(0.45,0.05,0.55,0.95)]"
                          >
                            <div>
                              <GiPositionMarker size={25} />
                            </div>
                            <div>
                              <p>{add.addr}</p>
                              <p>{add.phone}</p>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  )}
                </li>
              </ul>
            </div>
            <div className="h-[455px] md:flex-[3]">
              <iframe
                src={srcmap}
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="px-3 pt-20">
            {categories.map((cate, index) => (
              <div key={index + 1} className="flex flex-col pb-10 md:py-5">
                <h1 className="relative mx-auto w-max text-center text-[30px] font-semibold after:absolute after:inset-x-1/2 after:-bottom-1 after:h-[3px] after:w-2/3 after:-translate-x-1/2 after:bg-[#be7352]">
                  {cate.name}
                </h1>
                <div className="grid grid-cols-1 gap-y-3 py-10 md:grid-cols-2 md:items-center md:gap-x-10">
                  {cate.address.map((local) => {
                    return (
                      <div key={local.slug}>
                        <h2 className="text-[24px] font-semibold">
                          {local.title}
                        </h2>
                        {local.detail.map((add) => (
                          <div
                            key={add.slug}
                            className="flex items-center gap-x-3 py-2 font-medium"
                          >
                            <div className="rounded-full bg-[#be7352] p-[3px]">
                              <GiPositionMarker size={20} color="white" />
                            </div>
                            <div>
                              <Link href={`/location/${add.slug}`}>
                                <a className="text-[17px] hover:text-[#be7352]">
                                  {add.addr}
                                </a>
                              </Link>
                              <p className="text-[14px] text-zinc-600">
                                {add.phone}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(`/api/location/categories`);
  const categories = res.data;
  return {
    props: {
      categories,
    },
  };
};

export default HeThongCuaHang;
