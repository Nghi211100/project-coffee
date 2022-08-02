/* eslint-disable react/no-children-prop */
import type { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import type { Blog } from '@/pages/ve-chung-toi';
import { Main } from '@/templates/Main';

const blog: Blog = {
  date: '2021/08/26',
  title: 'PHONG CÁCH KHÁC BIỆT',
  slug: 'phong-cach-khac-biet-tai-phela',
  content: `
  ### PHONG CÁCH KHÁC BIỆT

26-08-2021

Đi theo concept Cắm Trại – khác biệt so với các thương hiệu khác trên thị trường, Phê La đã tạo ra ấn tượng mạnh mẽ cho khách hàng nhờ những chất riêng và thiết kế độc đáo của mình.

![alt](https://res.cloudinary.com/cloubynghi/image/upload/v1659434980/2_rcnmza.jpg)
*Tông màu trầm ấm mang đến cảm giác thoải mái, gần gũi*

Trong mỗi góc nhỏ tại Phê La đều có sự xuất hiện của ghế dù và bàn xếp, kết hợp với tone màu nâu trầm ấm làm chủ đạo, Phê La mong muốn sẽ mang lại không gian thưởng thức thoải mái, gần gũi và mộc mạc nhất cho khách hàng. Cũng chính bởi sự nguyên sơ này, khách hàng như được hoà mình vào thiên nhiên để tâm tình, thủ thỉ vài ba câu chuyện nhỏ bên những cốc trà, và bỏ lại những suy nghĩ mệt mỏi, xô bồ của cuộc sống.

![alt](https://res.cloudinary.com/cloubynghi/image/upload/v1659434980/Untitled-1_1_fiams6.jpg)
*Tông màu trầm ấm mang đến cảm giác thoải mái, gần gũi*

Có thể nói, đây là sự độc đáo và khác biệt của Phê La khi hướng mình tới một concept không gian hoàn toàn mới. Đây không phải là nơi phù hợp để bạn làm việc hay nghiên cứu, mà là nơi bạn được là chính mình, được giải toả áp lực, được thư giãn và được ‘chill’.`,
  srcImg: '/assets/images/DSC09515.jpg',
  altImg: 'bannertop',
};

const BlogPage = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${blog.title} - Phela`}
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className=" w-full pt-[61px] pb-[740px] md:pb-96">
        <Head src={blog.srcImg} alt={blog.altImg} />
        <div className="mx-auto max-w-5xl px-4 pt-10">
          <article className="prose-base prose max-w-full space-y-1 text-black md:prose-base">
            <ReactMarkdown
              children={blog.content}
              remarkPlugins={[remarkGfm]}
            />
          </article>
        </div>
      </div>
    </Main>
  );
};

export default BlogPage;

// export async function getServerSideProps({ query: { slug }:string }) {
//   return {
//     props: {
//       slug,
//     },
//   };
// }

export const getServerSideProps: GetServerSideProps = async ({
  query: { slug },
}) => {
  return {
    props: {
      slug,
    },
  };
};
