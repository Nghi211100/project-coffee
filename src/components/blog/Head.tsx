import Image from 'next/image';

interface Iprops {
  title?: string;
  src: string;
  alt: string;
}

export const Head = (props: Iprops) => {
  return (
    <div className="relative h-[195px] md:h-[300px]">
      <div className="relative h-full w-screen ">
        <Image
          src={props.src}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 flex w-full items-center justify-center bg-[rgba(0,0,0,0.2)]">
        <p className="text-[25px] font-medium text-white md:text-[30px]">
          {props.title ? props.title : ''}
        </p>
      </div>
    </div>
  );
};
