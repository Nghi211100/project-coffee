/* eslint-disable react/no-children-prop */

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export interface Blog {
  title: string;
  slug: string;
  content: string;
  srcImg: string;
  altImg: string;
}

const blog: Blog = {
  title: 'VỀ PHÊ LA',
  slug: 'vephela',
  content: `
  ### “Chúng tôi bán Ô long đặc sản Đà Lạt”
  
  Một lời khẳng định đầy mạnh mẽ và tự hào của Phê La. Không khó để bạn bắt gặp dòng chữ này mỗi khi đặt chân đến Phê La hay qua những ấn phẩm truyền thông của thương hiệu trên mạng xã hội. 


  Từ xưa đến nay, Ô Long đặc sản được biết đến là một dòng trà cao cấp thường dùng để xuất khẩu, được trau chuốt một cách tỉ mỉ từ khi chọn giống cho đến cách ươm trồng, chăm bón. Vì vậy, so với các dòng trà khác, Ô Long đặc sản có giá thành cao và rất được ưa chuộng trong văn hoá thưởng thức trà đạo. Đó cũng là một trong những lí do khiến dòng trà này chưa được phổ biến rộng rãi, và hiếm có thương hiệu nào sẵn sàng biến Ô Long đặc sản thành hình thức thương mại để phù hợp với khẩu vị của số đông.


  Phê La tự hào là thương hiệu đầu tiên và duy nhất tại Việt Nam tập trung vào phát triển dòng trà Ô Long đặc sản Đà Lạt và mang chúng tiếp cận gần hơn với cộng đồng. Phê La được ra đời với niềm vinh hạnh khi được cùng đồng hành với người nông dân để mang tới dòng trà Ô Long đặc sản cao cấp và giúp nâng tầm nông sản Việt trên thị trường trong nước và quốc tế.`,
  srcImg: '/assets/images/DSC09519-scaled.jpg',
  altImg: 'bannertop',
};
const AboutUs = () => {
  return (
    <div>
      <Main
        meta={
          <Meta
            title="VỀ PHÊ LA - Phela"
            description="Phê La mang lại hương vị cà phê Đà Lạt"
          />
        }
      >
        <div className="pt-[61px] pb-[740px] md:pb-96">
          <Head src={blog.srcImg} alt={blog.altImg} title={blog.title} />
          <div className="mx-auto flex max-w-7xl px-4 pt-10 md:flex md:gap-14">
            <div className="md:flex-[1]">
              <article className="prose-base prose max-w-full text-black md:prose-sm ">
                <ReactMarkdown
                  children={blog.content}
                  remarkPlugins={[remarkGfm]}
                />
              </article>
            </div>
            <div className="pt-6 md:flex-[1] md:pt-0">
              <div className="relative flex h-[220px] w-full items-center md:h-[380px]">
                <Image
                  src={'/assets/images/HH_3783-600x400.jpg'}
                  layout="fill"
                  objectFit="cover"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default AboutUs;
