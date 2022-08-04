import { Post } from 'config/postConfig';
import Image from 'next/image';


interface Iprops {
  banners: Post[];
}

const Banner = (props: Iprops) => {
  const { banners } = props;
  return (
    <div className="mx-auto max-w-7xl gap-12 px-4 pt-10 md:flex md:justify-evenly">
      {banners.map((banner, index) => (
        <div
          key={index + 1}
          className="flex flex-[1] flex-col items-center py-5 text-center"
        >
          <div className="relative h-[64px] w-[82px]">
            <Image
              src={banner.srcImg}
              alt={banner.altImg}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="pt-5 text-[17px] ">
            <h1 className="pb-2 font-semibold">{banner.title}</h1>
            <p className="text-[#8c8c8c]">{banner.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
