import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [openCCTH, setOpenCCTH] = useState(false);
  const [openTT, setOpenTT] = useState(false);
  const [openTD, setOpenTD] = useState(false);
  const [openTTV, setOpenTTV] = useState(false);
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div>
          <div className="fixed z-[100] mx-auto h-[60px] w-screen  bg-black px-2 sm:px-6 lg:px-8">
            <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-1 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-9 w-9" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-9 w-9" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between">
                <div className="flex shrink-0 items-center">
                  <div className="mx-auto flex max-w-[1170px] items-center">
                    <Link href="/">
                      <a>
                        <div className="flex items-center">
                          <Image
                            src={'/favicon-phela.png'}
                            width={65}
                            height={42.18}
                            alt="icon"
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    <div>
                      <Link href={'/san-pham-phela'}>
                        <a className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700">
                          SẢN PHẨM
                        </a>
                      </Link>
                    </div>
                    <div className="relative">
                      <Link href={'#'}>
                        <a
                          className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700"
                          onMouseEnter={() => setOpenCCTH(true)}
                          onMouseLeave={() => setOpenCCTH(false)}
                        >
                          CÂU CHUYỆN THƯƠNG HIỆU
                        </a>
                      </Link>
                      <div
                        className={
                          openCCTH === true
                            ? 'absolute top-[38px] flex w-[250px] flex-col bg-black px-3 pt-2'
                            : 'absolute top-[38px] hidden w-[250px] flex-col bg-black px-3 pt-2'
                        }
                        onMouseEnter={() => setOpenCCTH(true)}
                        onMouseLeave={() => setOpenCCTH(false)}
                      >
                        <Link href={'/ve-chung-toi'}>
                          <a className="py-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                            VỀ PHÊ LA
                          </a>
                        </Link>
                        <Link
                          href={'/2021/08/26/phong-cach-khac-biet-tai-phe-la'}
                        >
                          <a className="border-y py-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                            PHONG CÁCH KHÁC BIỆT
                          </a>
                        </Link>
                        <Link href={'#'}>
                          <a className="py-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                            NGUỒN NGUYÊN LIỆU ĐẶC SẢN
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="relative ">
                      <Link href={'/tin-tuc'}>
                        <a
                          className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700"
                          onMouseEnter={() => setOpenTT(true)}
                          onMouseLeave={() => setOpenTT(false)}
                        >
                          TIN TỨC
                        </a>
                      </Link>
                      <div
                        className={
                          openTT === true
                            ? 'absolute top-[38px] flex w-[250px] flex-col bg-black px-3 pt-2'
                            : 'absolute top-[38px] hidden w-[250px] flex-col bg-black px-3 pt-2'
                        }
                        onMouseEnter={() => setOpenTT(true)}
                        onMouseLeave={() => setOpenTT(false)}
                      >
                        <Link href={'/ve-chung-toi'}>
                          <a className="py-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                            ƯU ĐÃI
                          </a>
                        </Link>
                        <Link href={'/ve-chung-toi'}>
                          <a className="border-t py-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                            SỰ KIỆN
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <Link href={'/san-pham-phela'}>
                        <a className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700">
                          CỬA HÀNG
                        </a>
                      </Link>
                    </div>

                    <div className="relative">
                      <Link href={'#'}>
                        <a
                          className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700"
                          onMouseEnter={() => setOpenTD(true)}
                          onMouseLeave={() => setOpenTD(false)}
                        >
                          TUYỂN DỤNG
                        </a>
                      </Link>
                      <div
                        className={
                          openTD === true
                            ? 'absolute top-[38px] flex w-[250px] flex-col bg-black px-3 pt-2'
                            : 'absolute top-[38px] hidden w-[250px] flex-col bg-black px-3 pt-2'
                        }
                        onMouseEnter={() => setOpenTD(true)}
                        onMouseLeave={() => setOpenTD(false)}
                      >
                        <Link href={'/ve-chung-toi'}>
                          <a className="py-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                            KHỐI VĂN PHÒNG
                          </a>
                        </Link>
                        <Link href={'/ve-chung-toi'}>
                          <a className=" border-t py-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                            KHỐI CỬA HÀNG
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="relative">
                      <Link href={'#'}>
                        <a
                          className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700"
                          onMouseEnter={() => setOpenTTV(true)}
                          onMouseLeave={() => setOpenTTV(false)}
                        >
                          THẺ THÀNH VIÊN
                        </a>
                      </Link>
                      <div
                        className={
                          openTTV === true
                            ? 'absolute top-[38px] flex w-[250px] flex-col bg-black px-3 pt-2'
                            : 'absolute top-[38px] hidden w-[250px] flex-col bg-black px-3 pt-2'
                        }
                        onMouseEnter={() => setOpenTTV(true)}
                        onMouseLeave={() => setOpenTTV(false)}
                      >
                        <Link href={'/ve-chung-toi'}>
                          <a className="py-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                            ĐIỀU KHOẢN VÀ ĐIỀU KIỆN
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <Link href={'/lien-he'}>
                        <a className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700">
                          LIÊN HỆ
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="fixed inset-x-0 bottom-0 top-[60px] z-[100] space-y-1 bg-black px-2 pt-2 pb-3">
              <div>
                <div>
                  <Link href={'/san-pham-phela'}>
                    <a className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700">
                      SẢN PHẨM
                    </a>
                  </Link>
                </div>
                <div className="relative">
                  <Link href={'#'}>
                    <a
                      className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700"
                      onMouseEnter={() => setOpenCCTH(!openCCTH)}
                      onMouseLeave={() => setOpenCCTH(!openCCTH)}
                    >
                      CÂU CHUYỆN THƯƠNG HIỆU
                    </a>
                  </Link>
                  <div
                    className={
                      openCCTH === true
                        ? 'flex w-[250px] flex-col bg-black px-3 pt-2'
                        : 'hidden w-[250px] flex-col bg-black px-3 pt-2'
                    }
                  >
                    <Link href={'/ve-chung-toi'}>
                      <a className="p-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                        VỀ PHÊ LA
                      </a>
                    </Link>
                    <Link href={'/2021/08/26/phong-cach-khac-biet-tai-phe-la'}>
                      <a className="p-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                        PHONG CÁCH KHÁC BIỆT
                      </a>
                    </Link>
                    <Link href={'#'}>
                      <a className="p-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                        NGUỒN NGUYÊN LIỆU ĐẶC SẢN
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="relative ">
                  <Link href={'/tin-tuc'}>
                    <a
                      className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700"
                      onMouseEnter={() => setOpenTT(!openTT)}
                      onMouseLeave={() => setOpenTT(!openTT)}
                    >
                      TIN TỨC
                    </a>
                  </Link>
                  <div
                    className={
                      openTT === true
                        ? 'flex w-[250px] flex-col bg-black px-3 pt-2'
                        : 'hidden w-[250px] flex-col bg-black px-3 pt-2'
                    }
                  >
                    <Link href={'/ve-chung-toi'}>
                      <a className="p-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                        ƯU ĐÃI
                      </a>
                    </Link>
                    <Link href={'/ve-chung-toi'}>
                      <a className="p-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                        SỰ KIỆN
                      </a>
                    </Link>
                  </div>
                </div>

                <div>
                  <Link href={'/san-pham-phela'}>
                    <a className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700">
                      CỬA HÀNG
                    </a>
                  </Link>
                </div>

                <div className="relative">
                  <Link href={'#'}>
                    <a
                      className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700"
                      onMouseEnter={() => setOpenTD(!openTD)}
                      onMouseLeave={() => setOpenTD(!openTD)}
                    >
                      TUYỂN DỤNG
                    </a>
                  </Link>
                  <div
                    className={
                      openTD === true
                        ? 'flex w-[250px] flex-col bg-black px-3 pt-2'
                        : 'hidden w-[250px] flex-col bg-black px-3 pt-2'
                    }
                  >
                    <Link href={'/ve-chung-toi'}>
                      <a className="p-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                        KHỐI VĂN PHÒNG
                      </a>
                    </Link>
                    <Link href={'/ve-chung-toi'}>
                      <a className="p-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                        KHỐI CỬA HÀNG
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <Link href={'#'}>
                    <a
                      className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700"
                      onMouseEnter={() => setOpenTTV(!openTTV)}
                      onMouseLeave={() => setOpenTTV(!openTTV)}
                    >
                      THẺ THÀNH VIÊN
                    </a>
                  </Link>
                  <div
                    className={
                      openTTV === true
                        ? 'flex w-[250px] flex-col bg-black px-3 pt-2'
                        : 'hidden w-[250px] flex-col bg-black px-3 pt-2'
                    }
                  >
                    <Link href={'/ve-chung-toi'}>
                      <a className="p-2 text-[14px] font-semibold text-white hover:text-yellow-700">
                        ĐIỀU KHOẢN VÀ ĐIỀU KIỆN
                      </a>
                    </Link>
                  </div>
                </div>

                <div>
                  <Link href={'/lien-he'}>
                    <a className="block rounded-md px-3 py-2 text-[15px] font-medium text-white hover:text-yellow-700">
                      LIÊN HỆ
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
