/* eslint-disable no-restricted-globals */
/* eslint-disable tailwindcss/no-custom-classname */
import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import * as React from 'react';

const images = [
  {
    src: '/assets/images/Untitled-1.jpg',
    alt: 'local1',
    adress: 'Số 7 Nguyễn Chí Thanh, thành phố Đà Lạt, tỉnh Lâm Đồng',
    phone: 'Số điện thoại: 0354 485 559',
  },
  {
    src: '/assets/images/Pla-TT-2-2048x1372.png',
    alt: 'local2',
    adress: 'Số N04 - B1 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội',
    phone: 'Số điện thoại: 039 397 5559',
  },
  {
    src: '/assets/images/Untitled-1.jpg',
    alt: 'local1',
    adress: 'Số 7 Nguyễn Chí Thanh, thành phố Đà Lạt, tỉnh Lâm Đồng',
    phone: 'Số điện thoại: 0354 485 559',
  },
  {
    src: '/assets/images/Pla-TT-2-2048x1372.png',
    alt: 'local2',
    adress: 'Số N04 - B1 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội',
    phone: 'Số điện thoại: 039 397 5559',
  },
  {
    src: '/assets/images/Untitled-1.jpg',
    alt: 'local1',
    adress: 'Số 7 Nguyễn Chí Thanh, thành phố Đà Lạt, tỉnh Lâm Đồng',
    phone: 'Số điện thoại: 0354 485 559',
  },
  {
    src: '/assets/images/Pla-TT-2-2048x1372.png',
    alt: 'local2',
    adress: 'Số N04 - B1 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội',
    phone: 'Số điện thoại: 039 397 5559',
  },
];

export default function HTCuaHang() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [view, setView] = React.useState(3);
  React.useEffect(() => {
    if (innerWidth < 600) {
      setView(1);
    } else {
      setView(3);
    }

    window.addEventListener('resize', () => {
      if (innerWidth < 600) {
        setView(1);
      } else {
        setView(3);
      }
    });
  });
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: view,
      spacing: 15,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative mx-auto max-w-7xl px-3 pt-16 pb-20 md:px-0 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto">
        <div className="text-center">
          <h2 className="text-[22px] font-bold tracking-tight text-gray-900 md:text-[30px] md:font-semibold">
            HỆ THỐNG CỬA HÀNG
          </h2>
        </div>
        <div className="mx-auto mt-4 max-w-lg pb-10 md:max-w-none">
          <div className="flex flex-col overflow-hidden rounded-lg p-4 shadow-lg md:flex-row md:gap-12 md:p-10">
            <div className="shrink-0 md:flex-[1]">
              <div className="relative h-[300px] w-[330px] object-cover md:h-[300px] md:w-full">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={'/assets/images/DSC06584-scaled-1.jpg'}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white pt-1">
              <div className="flex-1">
                <p className="text-ellipsis pt-4 text-[18px] font-semibold text-gray-900 line-clamp-2 md:text-[29px]">
                  Số 65 Phạm Ngọc Thạch, Đống Đa, Hà Nội
                </p>

                <p className="mb-2 text-ellipsis pt-2 text-base text-gray-500 line-clamp-5">
                  Phê La chính thức ra mắt thị trường với cửa hàng đầu tiên tại
                  Phạm Ngọc Thạch vào tháng 03/2021. Với mặt tiền rộng rãi cùng
                  cách trang trí khác biệt, Phê La đã thu hút được sự quan tâm
                  đông đảo của các bạn trẻ đến quán để trải nghiệm và thưởng
                  thức hương vị của trà Ô Long đặc sản Đà Lạt thơm ngon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div ref={sliderRef} className="keen-slider h-[250px] w-full shadow-md">
          {images.map((img, index) => (
            <div key={index + 1} className="keen-slider__slide !p-2 ">
              <div className="relative h-full w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute flex h-full w-full items-end bg-[rgba(0,0,0,0.17)] p-4">
                  <div className="font-semibold text-white">
                    <p className="text-[20px]">{img.adress}</p>
                    <p>{img.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots flex !p-1 md:hidden">
            {Array.from(
              Array(instanceRef.current.track.details.slides.length).keys()
            ).map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`dot${currentSlide === idx ? ' active' : ''}`}
                >
                  •
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
