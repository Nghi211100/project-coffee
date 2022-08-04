import { Product } from 'config/productConfig';
import Image from 'next/image';
import Link from 'next/link';


interface Iprops {
  products: Product[];
  title: string;
}

export default function Title(props: Iprops) {
  const { products } = props;
  return (
    <div>
      <div className="md:flex md:items-center md:justify-center">
        <h2 className="mx-2 text-center text-[21px] font-semibold tracking-tighter md:text-[28px]">
          {props.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-7 pt-6 sm:gap-x-6 md:grid-cols-4 md:gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group mx-auto w-max p-5 shadow-[0_5px_20px_rgba(0,0,0,0.1)] md:w-full md:p-0 md:pb-6 md:shadow-none"
          >
            <Link href={`/product/${product.slug}`}>
              <a>
                <div className="relative mx-auto h-[305px] w-[320px] overflow-hidden rounded-md group-hover:opacity-75 md:h-[350px] md:w-full">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </a>
            </Link>

            <div className="p-3 ">
              <Link href={`/product/${product.slug}`}>
                <a className="text-black">
                  <h3 className="text-left text-[16px] font-semibold">
                    {product.name}
                  </h3>
                </a>
              </Link>

              <div>
                <p className="pt-1 text-left text-[16px] font-medium text-[#be7352]">
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
