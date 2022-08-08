import React from 'react';

const CheckOut = () => {
  return (
    <section
      aria-labelledby="payment-and-shipping-heading"
      className="w-full bg-white py-6 px-4 md:py-16 md:px-10 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:max-w-lg lg:pb-24"
    >
      <form>
        <div className="mx-auto max-w-3xl">
          <div>
            <h3
              id="contact-info-heading"
              className="text-lg font-medium text-gray-900"
            >
              Thông tin liên hệ
            </h3>

            <div className="mt-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Số điện thoại
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Địa chỉ ship</h3>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
              <div className="sm:col-span-3">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Địa chỉ
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Thành phố / Tỉnh
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quận / Huyện
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="district"
                    name="district"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="ward"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phường / Xã
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="ward"
                    name="ward"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
            <button
              type="submit"
              className="rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#F58B74]"
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckOut;
