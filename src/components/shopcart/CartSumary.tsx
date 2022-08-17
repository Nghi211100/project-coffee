import NumberFormat from 'react-number-format';

interface Iprops {
  cart: any;
}

const CartSumary = (props: Iprops) => {
  const { cart } = props;
  const totalPrice = () => {
    return cart.reduce(
      (price: number, item: any) => item.totalPrice.gross.amount + price,
      0
    );
  };
  return (
    <dl className="mt-6 space-y-4">
      <div className="flex justify-between">
        <dt className="text-sm text-gray-600">Subtotal</dt>
        <div className="text-right">
          {cart &&
            cart.map((item: any) => (
              <div
                key={item.id}
                className="border-b pb-2 text-sm font-medium text-gray-900"
              >
                <p className="border-none text-right text-[18px]">
                  <NumberFormat
                    thousandSeparator={true}
                    thousandsGroupStyle="thousand"
                    value={item.totalPrice.gross.amount}
                    suffix={' đ'}
                    className="border-none bg-gray-50 text-right"
                  />
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt className="text-base font-medium text-gray-900">Order total</dt>
        <dd className="border-none text-right text-base font-medium text-gray-900">
          <NumberFormat
            thousandSeparator={true}
            thousandsGroupStyle="thousand"
            value={totalPrice()}
            suffix={' đ'}
            className="border-none bg-gray-50 text-right"
          />
        </dd>
      </div>
    </dl>
  );
};

export default CartSumary;
