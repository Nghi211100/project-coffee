/* eslint-disable tailwindcss/no-custom-classname */

import Link from 'next/link';
import { useState } from 'react';
import { GiPositionMarker } from 'react-icons/gi';

import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import data from './api/location/categories/data.json';

const head = {
  title: 'HỆ THỐNG CỬA HÀNG',
  srcImg: '/assets/images/DSC09570-scaled.jpg',
  altImg: 'post1',
};

const HeThongCuaHang = () => {
  const { categories } = data;

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
                <li
                  onClick={() => setOpenDL(!openDL)}
                  className="cursor-pointer"
                >
                  <p
                    className={`${
                      !openDL && 'border-b'
                    } flex cursor-pointer justify-between border-zinc-400`}
                  >
                    Chi nhánh Đà Lạt{' '}
                    <span className={`${openDL && 'rotate-90'} text-zinc-400`}>
                      &gt;
                    </span>
                  </p>
                  {openDL && (
                    <>
                      {categories.map((cate) => (
                        <>
                          {cate.name === 'Đà Lạt' &&
                            cate.address.map((add) => (
                              <>
                                {add.detail.map((item) => (
                                  <>
                                    <div
                                      onClick={() => setSrcmap(item.src)}
                                      className="flex border-b border-dashed  border-zinc-400 py-3 text-[15px] ease-[cubic-bezier(0.45,0.05,0.55,0.95)]"
                                    >
                                      <div>
                                        <GiPositionMarker size={25} />
                                      </div>
                                      <div>
                                        <p>{item.addr}</p>
                                        <p>{item.phone}</p>
                                      </div>
                                    </div>
                                  </>
                                ))}
                              </>
                            ))}
                        </>
                      ))}
                    </>
                  )}
                </li>
                <li
                  onClick={() => setOpenHN(!openHN)}
                  className="cursor-pointer py-2"
                >
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
                      {categories.map((cate) => (
                        <>
                          {cate.name === 'Hà Nội' &&
                            cate.address.map((add) => (
                              <>
                                {add.detail.map((item) => (
                                  <>
                                    <div
                                      onClick={() => setSrcmap(item.src)}
                                      className="flex border-b border-dashed  border-zinc-400 py-3 text-[15px] ease-[cubic-bezier(0.45,0.05,0.55,0.95)]"
                                    >
                                      <div>
                                        <GiPositionMarker size={25} />
                                      </div>
                                      <div>
                                        <p>{item.addr}</p>
                                        <p>{item.phone}</p>
                                      </div>
                                    </div>
                                  </>
                                ))}
                              </>
                            ))}
                        </>
                      ))}
                    </>
                  )}
                </li>
                <li
                  onClick={() => setOpenHCM(!openHCM)}
                  className="cursor-pointer"
                >
                  <p
                    className={`${
                      !openHCM && 'border-b'
                    } flex cursor-pointer justify-between border-zinc-400`}
                  >
                    Chi nhánh Hồ Chí Minh{' '}
                    <span className={`${openHCM && 'rotate-90'} text-zinc-400`}>
                      &gt;
                    </span>
                  </p>
                  {openHCM && (
                    <>
                      {categories.map((cate) => (
                        <>
                          {cate.name === 'Hồ Chí Minh' &&
                            cate.address.map((add) => (
                              <>
                                {add.detail.map((item) => (
                                  <>
                                    <div
                                      onClick={() => setSrcmap(item.src)}
                                      className="flex border-b border-dashed  border-zinc-400 py-3 text-[15px] ease-[cubic-bezier(0.45,0.05,0.55,0.95)]"
                                    >
                                      <div>
                                        <GiPositionMarker size={25} />
                                      </div>
                                      <div>
                                        <p>{item.addr}</p>
                                        <p>{item.phone}</p>
                                      </div>
                                    </div>
                                  </>
                                ))}
                              </>
                            ))}
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

export default HeThongCuaHang;
