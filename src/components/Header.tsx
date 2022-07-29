import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-[1170px] items-center">
        <div>
          <Image
            src={'/favicon-phela.png'}
            width={65}
            height={42.18}
            alt="icon"
          />
        </div>
        <div className="ml-auto flex text-white">
          <Link href={'/san-pham-phela'}></Link>
          <Link href={'/san-pham-phela'}></Link>
          <Link href={'/san-pham-phela'}></Link>
          <Link href={'/san-pham-phela'}></Link>
          <Link href={'/san-pham-phela'}></Link>
          <Link href={'/san-pham-phela'}></Link>
          <div>SẢN PHẨM</div>
          <div className="relative">
            <p>CÂU CHUYỆN THƯƠNG HIỆU</p>
            <div className="absolute"></div>
          </div>
          <div>TIN TỨC</div>
          <div>CỬA HÀNG</div>
          <div>TUYỂN DỤNG</div>
          <div>THẺ THÀNH VIÊN</div>
          <div>LIÊN HỆ</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
