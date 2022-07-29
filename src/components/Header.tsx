import Image from 'next/image';
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
      </div>
    </div>
  );
};

export default Header;
