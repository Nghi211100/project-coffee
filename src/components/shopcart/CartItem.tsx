import { XIcon } from '@heroicons/react/outline';
import NumberFormat from 'react-number-format';

interface Iprops {
  item: any;
  updateCart: any;
  removeItem: any;
}

const CartItem = (props: Iprops) => {
  const { item, updateCart, removeItem } = props;
  return (
    <>
      <div className="shrink-0">
        <img
          src={item.variant.product.thumbnail.url}
          alt={item.variant.product.thumbnail.alt}
          className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <a
                  href={`/product/${item.variant.product.slug}`}
                  className="text-[18px] font-medium text-gray-700 hover:text-gray-800"
                >
                  {item.variant.product.name}
                </a>
              </h3>
            </div>
            <p className="mt-1 text-sm font-medium text-[#F58B74]">
              <NumberFormat
                thousandSeparator={true}
                thousandsGroupStyle="thousand"
                value={item.unitPrice.gross.amount}
                suffix={' đ'}
              />
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <select
              value={item.quantity}
              className="max-w-full rounded-md border border-gray-300 px-3 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                updateCart(parseInt(e.target.value, 10), item.variant.id);
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>

            <div className="absolute top-0 right-0">
              <button
                type="button"
                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                onClick={() => removeItem(item.id)}
              >
                <span className="sr-only">Remove</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
