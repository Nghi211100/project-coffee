/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-restricted-globals */
/* eslint-disable tailwindcss/no-custom-classname */

import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Banner from '@/components/aboutus/Banner';
import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface Cate {
  name: string;
  slug: string;
}
export interface Blog {
  category?: Cate[];
  date?: string;
  title: string;
  slug?: string;
  content: string;
  srcImg: string;
  altImg: string;
}

const blog: Blog = {
  title: 'VỀ PHÊ LA',
  slug: 'vephela',
  content: `
  ### “Chúng tôi bán Ô long đặc sản Đà Lạt”
  
  Một lời khẳng định đầy mạnh mẽ và tự hào của Phê La. Không khó để bạn bắt gặp dòng chữ này mỗi khi đặt chân đến Phê La hay qua những ấn phẩm truyền thông của thương hiệu trên mạng xã hội. 


  Từ xưa đến nay, Ô Long đặc sản được biết đến là một dòng trà cao cấp thường dùng để xuất khẩu, được trau chuốt một cách tỉ mỉ từ khi chọn giống cho đến cách ươm trồng, chăm bón. Vì vậy, so với các dòng trà khác, Ô Long đặc sản có giá thành cao và rất được ưa chuộng trong văn hoá thưởng thức trà đạo. Đó cũng là một trong những lí do khiến dòng trà này chưa được phổ biến rộng rãi, và hiếm có thương hiệu nào sẵn sàng biến Ô Long đặc sản thành hình thức thương mại để phù hợp với khẩu vị của số đông.


  Phê La tự hào là thương hiệu đầu tiên và duy nhất tại Việt Nam tập trung vào phát triển dòng trà Ô Long đặc sản Đà Lạt và mang chúng tiếp cận gần hơn với cộng đồng. Phê La được ra đời với niềm vinh hạnh khi được cùng đồng hành với người nông dân để mang tới dòng trà Ô Long đặc sản cao cấp và giúp nâng tầm nông sản Việt trên thị trường trong nước và quốc tế.`,
  srcImg: '/assets/images/DSC09519-scaled.jpg',
  altImg: 'bannertop',
};

const gtcl: Blog[] = [
  {
    title: 'Thủ công',
    content:
      'Tại Phê La, sự tâm huyết, tỉ mỉ và tinh tế được thể hiện qua từng sản phẩm. Những lá trà Ô long được thu hoạch và sơ chế thủ công, kết hợp cùng việc nghiên cứu và sáng tạo, Phê La đã làm nên những sản phẩm mang hương vị nguyên bản và chânthật nhất.',
    srcImg: '/assets/images/IMG_4448-750x500.jpg',
    altImg: 'banner1',
  },
  {
    title: 'Quan tâm',
    content:
      'Tối ưu trải nghiệm của từng khách hàng là tiêu chí hàng đầu của Phê La. Đó cũng là lý do mọi dịch vụ, sản phẩm của Phê La luôn xoay quanh yếu tố con người. Phê La tin rằng, khách hàng - hay rộng hơn là cộng đồng sẽ luôn sát cánh cùng thương hiệu và lan tỏa những giá trị tốt đẹp đến xã hội.',
    srcImg: '/assets/images/aMGL9845-1024x683-1-600x400.jpg',
    altImg: 'banner2',
  },
  {
    title: 'Cảm hứng',
    content:
      'Mỗi sản phẩm, chiến dịch của Phê La đều được xây dựng dựa theo những nguồn cảm hứng rất đỗi bình dị trong cuộc sống. Với Phê La, đó là nơi bắt nguồn của những điều mới mẻ và kết nối những tâm hồn đồng điệu nhưng vẫn mang cá tính riêng biệt.',
    srcImg: '/assets/images/Untitled-1 (1).jpg',
    altImg: 'banner3',
  },
  {
    title: 'Trách nhiệm',
    content:
      'Phê La mong muốn tạo ra dấu ấn mạnh mẽ cho Ô Long đặc sản Đà Lạt khi sát cánh cùng người nông dân và đề cao sự phát triển bền vững của nguồn nguyên liệu. Bởi chúng tôi tin rằng đây sẽ là bước đệm vững chắc giúp Phê La giới thiệu rộng rãi đặc sản của người Việt tới cộng đồng và vươn ra thế giới.',
    srcImg: '/assets/images/MGL9644-750x500.jpg',
    altImg: 'banner4',
  },
];
const journeys: Blog[] = [
  {
    date: '8/2020',
    title: 'Phê La và những bước đi đầu tiên',
    content: 'Thương hiệu Phê La được đăng ký bảo hộ độc quyền tại Việt Nam',
    srcImg: '/assets/images/DSC09528-750x500.jpg',
    altImg: 'step1',
  },
  {
    date: '8/3/2021',
    title: 'Ra mắt thị trường',
    content:
      'Phê La chính thức xuất hiện trên thị trường với cửa hàng đầu tiên tại Phạm Ngọc Thạch',
    srcImg: '/assets/images/DSC06584-scaled-1.jpg',
    altImg: 'step2',
  },
  {
    date: '16/3/2021',
    title: 'Phủ sóng các kênh bán hàng online',
    content:
      'Lần lượt xuất hiện trên các ứng dụng giao hàng hàng đầu là Baemin và Shopee Fresh',
    srcImg: '/assets/images/DSC06167-750x500.jpg',
    altImg: 'step3',
  },
  {
    date: '22/05/2021',
    title: 'Mở rộng và phát triển',
    content: 'Thương hiệu Phê La được đăng ký bảo hộ độc quyền tại Việt Nam',
    srcImg: '/assets/images/Untitled-1 (2).jpg',
    altImg: 'step4',
  },
  {
    date: '8/11/2021',
    title: 'Phê La chính thức mở chi nhánh thứ ba',
    content:
      'Phê La chính thức mở chi nhánh thứ ba tại Đại La. Đây là cửa hàng duy nhất bán sản phẩm đóng chai.',
    srcImg: '/assets/images/Phe-La-DL-1.jpg',
    altImg: 'step5',
  },
];

const bannerOne: Blog[] = [
  {
    title: 'Tầm nhìn',
    content:
      'Mang nguồn nông sản cao cấp của Việt Nam tiếp cận gần hơn với mọi người và vươn ra thế giới.',
    srcImg: '/assets/images/eyes.png',
    altImg: 'banner1',
  },
  {
    title: 'Sứ mệnh',
    content:
      'Đồng hành cùng người nông dân trong quá trình sản xuất và phát triển bền vững nguồn nguyên liệu đặc sản.',
    srcImg: '/assets/images/Dm.png',
    altImg: 'banner2',
  },
];
const bannerTwo: Blog[] = [
  {
    title: '210.000+',
    content:
      'sản phẩm được bán ra trên thị trường trong vòng 5 tháng kinh doanh trong tình hình dịch bệnh căng thẳng',
    srcImg: '/assets/images/eyes.png',
    altImg: 'banner1',
  },
  {
    title: '5836',
    content:
      'lần được nhắc đến trên Facebook và Instagram trong vòng 4 tháng (từ 15/03/2021 đến 15/07/2021) (theo Sprout Social)',
    srcImg: '/assets/images/ezgif-7-dec41cab7982.png',
    altImg: 'banner2',
  },
  {
    title: '98%',
    content:
      'khách hàng hài lòng về chất lượng sản phẩm và dịch vụ của Phê La (theo đánh giá trên Baemin và Shopee Fresh)',
    srcImg: '/assets/images/Dm.png',
    altImg: 'banner2',
  },
];

const AboutUs = () => {
  const [view, setView] = React.useState(1);
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      if (innerWidth < 400) {
        setView(1);
      } else {
        setView(3);
      }
    });
  }

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
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
    <div>
      <Main
        meta={
          <Meta
            title="VỀ PHÊ LA - Phela"
            description="Phê La mang lại hương vị cà phê Đà Lạt"
          />
        }
      >
        <div className="w-full  pt-[61px] pb-[740px] md:pb-96">
          <Head src={blog.srcImg} alt={blog.altImg} title={blog.title} />
          <div className="mx-auto flex max-w-7xl flex-col px-4 pt-10 md:flex-row md:gap-14 md:pt-[60px]">
            <div className="md:flex-[4]">
              <article className="prose-base prose max-w-full space-y-1 text-black md:prose-base">
                <ReactMarkdown
                  children={blog.content}
                  remarkPlugins={[remarkGfm]}
                />
              </article>
            </div>
            <div className="pt-6 md:flex md:flex-[3] md:items-center md:pt-0">
              <div className="overflow-hidden p-[15px] md:m-[15px] md:w-full md:p-0">
                <div className="relative flex h-[220px] w-full items-center duration-500 ease-linear hover:scale-125 md:h-[385px]">
                  <Image
                    src={'/assets/images/HH_3783-600x400.jpg'}
                    layout="fill"
                    objectFit="cover"
                    alt="banner"
                  />
                </div>
              </div>
            </div>
          </div>
          <Banner banners={bannerOne} />
          <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-8">
            <h1 className="relative bg-white text-[29px] font-bold after:inset-x-1/2 after:-bottom-3 after:h-[12.5px] after:w-[25px] after:-translate-x-1/2 after:rounded-b-full after:bg-[#be7352] md:pb-10 md:after:absolute">
              GIÁ TRỊ CỐT LÕI
            </h1>
            <div className="w-full md:pt-0">
              {gtcl.map((post, index) => (
                <div
                  key={index + 1}
                  className="relative py-5 before:inset-x-[45%] before:inset-y-1/2 before:h-[1px] before:-translate-y-1/2 before:bg-[#be7352] after:inset-y-0 after:inset-x-1/2 after:w-[1px] after:-translate-x-1/2 after:bg-[#be7352] even:flex-row-reverse md:flex md:items-center md:justify-between md:before:absolute md:after:absolute"
                >
                  <div className="md:w-[40%]">
                    <h1 className=" text-[29px] font-semibold">{post.title}</h1>
                    <p className=" pt-2 text-[18px] text-[#8c8c8c]">
                      {post.content}
                    </p>
                  </div>
                  <div className="relative -mx-4 mt-7 md:m-0 md:w-[40%]">
                    <div className="w-screen p-4 shadow-lg md:w-max">
                      <div className="relative h-[240px] w-full md:h-[272px] md:w-[408px]">
                        <Image
                          src={post.srcImg}
                          layout="fill"
                          objectFit="fill"
                          alt={post.altImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-1/2 h-[25px] w-[25px] -translate-y-1/2 -translate-x-1/2 rounded-full border-[5px] border-[#be7352] bg-[#e5e5e5] md:inset-1/2"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-24 max-w-7x7">
            <h1 className="text-center text-[30px] font-semibold">
              Thành tựu nổi bật và đáng tự hào
            </h1>
            <Banner banners={bannerTwo} />
          </div>

          <div className="pt-8 max-w-7xl mx-auto">
            <h1 className="pb-10 text-center text-[30px] font-semibold">
              Những dấu ấn trong hành trình của chúng tôi
            </h1>
            <div
              ref={sliderRef}
              className="keen-slider h-max w-full md:after:absolute after:h-[1px] after:-z-10 after:inset-y-1/2 after:inset-x-0 after:bg-[#DDC3AF]"
            >
              {journeys.map((img, index) => (
                <div
                  key={index + 1}
                  className="keen-slider__slide w-screen text-center relative md:flex md:flex-col"
                >
                  <div className="keen-slider__orderone relative md:flex-[4] md px-[50px] h-[240px] flex items-center z-20">
                    <div className="mx-auto w-max keen__image overflow-visible rotate-6 p-3 shadow-[0_5px_20px_rgb(0,0,0,10%)] ">
                      <div className="keen__image__item relative mx-auto flex h-[149px] w-[224px] items-center">
                        <Image
                          src={img.srcImg}
                          alt={img.altImg}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="keen__date absolute top-6 left-[100px] md:left-10 md:top-1">
                      <p className="relative after:absolute after:w-[0.5px] after:top-[-40px] md:after:top-[-23px] after:left-1/2 after:bottom-full after:bg-[#DDC3AF] md:px-[22px] py-[6px] px-[13px] rounded-[15px] bg-[#DDC3AF] text-[13px] font-semibold">
                        {img.date}
                      </p>
                    </div>
                  </div>
                  <div className="keen-slider__ordertwo md:py-8 py-4 px-[50px] md:flex-[1]">
                    <div className="text-[13px]  text-black md:text-left">
                      <p className="text-[15px] font-semibold">{img.title}</p>
                      <p>{img.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {loaded && instanceRef.current && (
              <div className="dots flex  !p-1 md:hidden">
                {Array.from(
                  Array(instanceRef.current.track.details.slides.length).keys()
                ).map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx);
                      }}
                      className={`dot${
                        currentSlide === idx ? ' active text-[#DDC3AF]' : ''
                      }`}
                    >
                      •
                    </button>
                  );
                })}
              </div>
            )}
            <div className="flex justify-center pt-14">
              <input
                type={'button'}
                value="TÌM HIỂU THÊM"
                className="py-3 px-4 bg-[#DDC3AF] text-white font-semibold"
              />
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default AboutUs;
