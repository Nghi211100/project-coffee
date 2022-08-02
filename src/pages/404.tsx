import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function index() {
  return (
    <Main
      meta={
        <Meta
          title="Page Not Found"
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className="flex items-center justify-center md:h-screen">
        <div className="mt-[100px] mb-[750px] text-center md:my-0">
          <h1 className="mb-[30px] flex items-center justify-center text-[50px] font-bold">
            <FaExclamationTriangle /> 404
          </h1>
          <h4 className="font-bold">Sorry, Nothing is here</h4>
          <Link href="/">
            <a className="mr-[20px] text-slate-500 hover:text-[#000]">
              Go Back Home
            </a>
          </Link>
        </div>
      </div>
    </Main>
  );
}
