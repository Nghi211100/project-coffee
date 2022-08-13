import Image from 'next/image';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

interface Iprops {
  products: any[];
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
            key={product.node.id}
            className="group mx-auto w-max p-5 shadow-[0_5px_20px_rgba(0,0,0,0.1)] md:w-full md:p-0 md:pb-6 md:shadow-none"
          >
            <Link href={`/product/${product.node.slug}`}>
              <a>
                <div className="relative mx-auto h-[305px] w-[320px] overflow-hidden rounded-md group-hover:opacity-75 md:h-[350px] md:w-full">
                  <Image
                    src={product.node.thumbnail.url}
                    alt={product.node.thumbnail.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </a>
            </Link>

            <div className="p-3 ">
              <Link href={`/product/${product.node.slug}`}>
                <a className="text-black">
                  <h3 className="text-left text-[16px] font-semibold">
                    {product.node.name}
                  </h3>
                </a>
              </Link>

              <div>
                <p className="pt-1 text-left text-[16px] font-medium text-[#be7352]">
                  <NumberFormat
                    thousandSeparator={true}
                    thousandsGroupStyle="thousand"
                    value={product.node.pricing.priceRange.start.net.amount}
                    suffix={' đ'}
                    className=" w-full"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
