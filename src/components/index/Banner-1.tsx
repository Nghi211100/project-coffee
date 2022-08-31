import Image from 'next/image';
import Link from 'next/link';

export const BannerOne = () => {
  return (
    <div className="mx-auto max-w-[1180px] py-8 px-4">
      <div>
        <p className="pb-2 text-center text-[22px] font-semibold md:pb-14 md:pt-4 md:text-[30px]">
          PHÊ LA VÀ NHỮNG ĐIỀU KHÁC BIỆT
        </p>
      </div>
      <div className="flex flex-col items-center pb-12 text-[#333] md:flex-row md:gap-7">
        <div className="relative h-[252px] w-[252px] md:order-2 md:h-[374px] md:w-[374px] md:flex-[1]">
          <Image
            src={'/assets/images/web.jpg'}
            alt={'banner-1'}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="py-6 md:order-1 md:flex-[1]">
          <p className="pb-2 text-[19px] font-semibold md:text-[29px]">
            CÂU CHUYỆN THƯƠNG HIỆU
          </p>
          <p className="text-[15px] md:text-[16px]">
            “Chúng tôi bán Ô long đặc sản Đà Lạt” – Một lời khẳng định đầy mạnh
            mẽ và tự hào của Phê La. Không khó để bạn bắt gặp dòng chữ này mỗi
            khi đặt chân đến Phê La hay qua những ấn phẩm truyền thông của
            thương hiệu trên mạng xã hội.
          </p>
        </div>
        <div className="md:order-2 md:flex-[1]">
          <p className="pb-2 text-[19px] font-semibold md:text-[29px]">
            NGUYÊN LIỆU ĐẶC SẢN
          </p>
          <p className="text-[15px] md:text-[16px]">
            Trà Ô Long đặc sản tại Phê La còn được ươm trồng với phương pháp
            chăm bón hữu cơ, hoàn toàn với trứng gà, đậu nành và thu hái thủ
            công để có được những búp trà tươi và non nhất, tạo nên điểm khác
            biệt mạnh mẽ so với các thương hiệu khác. Có thể nói, dòng trà đặc
            sản của Phê La luôn giữ được hương vị thơm ngon nguyên bản nhất và
            được nhiều người biết đến như một nguồn nguyên liệu tinh hoa của Đà
            Lạt.
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-12 md:pb-0">
        <Link href={'/ve-chung-toi'}>
          <a className="bg-primary-default px-7 py-4 text-white hover:bg-primary-hover">
            Xem thêm
          </a>
        </Link>
      </div>
    </div>
  );
};
