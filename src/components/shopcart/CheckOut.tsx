import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface Iprops {
  updateAddress: any;
  updateEmail: any;
  createOrder: any;
  updateShippingMethod: any;
  handleShowCheck: any;
}

const CheckOut = ({
  createOrder,
  updateAddress,
  updateEmail,
  updateShippingMethod,
  handleShowCheck,
}: Iprops) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');

  const isValidEmail = (e: string) => {
    return /\S+@\S+\.\S+/.test(e);
  };
  const isValidPhone = (p: string) => {
    return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(p);
  };

  const handleClickOrder = async () => {
    const ivP = isValidPhone(phone);
    const ivE = isValidEmail(email);
    if (!ivP || !ivE) {
      if (!ivP) toast.error('🙄 Phone number is valid!');
      if (!ivE) toast.error('🙄 Email is valid!');
      return;
    }
    if (
      firstName === '' &&
      lastName === '' &&
      street === '' &&
      city === '' &&
      district === '' &&
      ward === ''
    ) {
      toast.error('🙄 Address is valid!');
      return;
    }
    const toastt = toast.loading('😁 The checkout is sending!');
    await updateAddress(
      firstName,
      lastName,
      phone,
      street,
      city,
      district,
      ward
    );
    await updateEmail(email);
    await updateShippingMethod();
    await createOrder();
    toast.update(toastt, {
      render: '🥰 The order send successed !',
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
      isLoading: false,
    });

    localStorage.removeItem('cartId');
    handleShowCheck();
  };
  return (
    <section className="h-[90vh] w-full overflow-y-auto bg-white py-6 px-4 md:py-16 md:px-10 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:max-w-lg lg:pb-24">
      <ToastContainer />
      <div className="mx-auto max-w-3xl">
        <div>
          <h3
            id="contact-info-heading"
            className="text-center text-xl font-bold text-gray-900 md:text-2xl"
          >
            Thông tin liên hệ
          </h3>
        </div>
        <div className="flex space-x-3">
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Họ
            </label>
            <div className="mt-1">
              <input
                type="text"
                value={lastName}
                className="block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Tên
            </label>
            <div className="mt-1">
              <input
                type="text"
                value={firstName}
                className="block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Số điện thoại
          </label>
          <div className="mt-1">
            <input
              type="phone"
              value={phone}
              className="block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              value={email}
              className="block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">Địa chỉ ship</h3>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Số nhà / đường
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  value={street}
                  className="block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setStreet(e.target.value)}
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
                  value={city}
                  className="block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setCity(e.target.value)}
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
                  value={district}
                  className="block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setDistrict(e.target.value)}
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
                  value={ward}
                  className="block w-full rounded-md border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setWard(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
          <button
            type="button"
            className="rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#F58B74]"
            onClick={() => handleClickOrder()}
          >
            Đặt hàng
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
