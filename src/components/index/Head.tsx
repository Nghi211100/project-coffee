/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable tailwindcss/no-custom-classname */

import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import React, { useState } from 'react';

const images = [
  {
    src: '/assets/images/bg1_mau-20210127030300.jpg',
    alt: 'banner1',
    title: 'Phê La',
    content: [{ con: 'Chúng tôi bán Ô Long đặc sản Đà Lạt' }],
  },
  {
    src: '/assets/images/HH_3882-scaled.jpg',
    alt: 'banner2',
    title: 'Phê La',
    content: [
      { con: 'Số 65 Phạm Ngọc Thạch, Đống Đa, Hà Nội' },
      { con: 'Số 45B Lý Thường Kiệt, Hoàn Kiếm, Hà Nộ' },
    ],
  },
  {
    src: '/assets/images/banner-tran-chau.png',
    alt: 'banner3',
    title: 'Phê La',
    content: [{ con: 'TRÂN CHÂU TƯƠI ĐÃ CÓ TẠI PHÊ LA' }],
  },
  {
    src: '/assets/images/banner-OLPG.png',
    alt: 'banner4',
    title: 'Ô LONG PHIN GIẤY PHÊ LA',
    content: [{ con: 'BẢN NHẠC THỦ CÔNG ĐẦY CẢM HỨNG CHÍNH THỨC RA MẮT' }],
  },
  {
    src: '/assets/images/banner-1.jpg',
    alt: 'banner5',
    title: 'Ô LONG MÙA XUÂN PHÊ LA',
    content: [{ con: 'NGUỒN Ô LONG ĐẶC SẢN TỪ NÔNG TRƯỜNG PHƯỚC LẠC' }],
  },
];

export default function Head() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {images.map((item, index) => (
            <div
              key={index + 1}
              className="keen-slider__slide number-slide h-[240px] md:h-[550px] xl:h-[865px]"
            >
              <div className="relative h-full w-screen">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 flex h-[62.42px] w-full flex-col justify-center bg-[rgba(0,0,0,0.64)] text-center md:h-[144.28px]">
                  <p className="text-[16px] md:text-[30px]">{item.title}</p>
                  {item.content.map((e, number) => (
                    <p key={number + 1} className="text-[14px] md:text-[25px]">
                      {e.con}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div className="hidden md:block">
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots hidden md:flex">
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
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
