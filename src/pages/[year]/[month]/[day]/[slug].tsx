/* eslint-disable react/no-children-prop */
import type { Post } from 'config/postConfig';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import BannerLast from '@/components/blog/BannerLast';
import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import data from '../../../api/posts/data.json';

const post: Post = {
  title: 'PHONG CÁCH KHÁC BIỆT',
  slug: 'phong-cach-khac-biet-tai-phela',
  category: [{ name: 'Tin Tức', slug: '#' }],
  content:
    'Đi theo concept Cắm Trại – khác biệt so với các thương hiệu khác trên thị trường, Phê La đã tạo ra ấn tượng mạnh mẽ cho khách hàng nhờ những chất riêng và thiết kế độc đáo của mình.\n\n![alt](https://res.cloudinary.com/cloubynghi/image/upload/v1659434980/2_rcnmza.jpg)\n*Tông màu trầm ấm mang đến cảm giác thoải mái, gần gũi*\n\nTrong mỗi góc nhỏ tại Phê La đều có sự xuất hiện của ghế dù và bàn xếp, kết hợp với tone màu nâu trầm ấm làm chủ đạo, Phê La mong muốn sẽ mang lại không gian thưởng thức thoải mái, gần gũi và mộc mạc nhất cho khách hàng. Cũng chính bởi sự nguyên sơ này, khách hàng như được hoà mình vào thiên nhiên để tâm tình, thủ thỉ vài ba câu chuyện nhỏ bên những cốc trà, và bỏ lại những suy nghĩ mệt mỏi, xô bồ của cuộc sống.\n\n![alt](https://res.cloudinary.com/cloubynghi/image/upload/v1659434980/Untitled-1_1_fiams6.jpg)\n*Tông màu trầm ấm mang đến cảm giác thoải mái, gần gũi*\n\nCó thể nói, đây là sự độc đáo và khác biệt của Phê La khi hướng mình tới một concept không gian hoàn toàn mới. Đây không phải là nơi phù hợp để bạn làm việc hay nghiên cứu, mà là nơi bạn được là chính mình, được giải toả áp lực, được thư giãn và được ‘chill’.',
  srcImg: '/assets/images/DSC09515.jpg',
  altImg: 'bannertop',
  date: '2021/08/26',
};

const BlogPage = () => {
  const { posts } = data;
  return (
    <Main
      meta={
        <Meta
          title={`${post.title} - Phela`}
          description="Phê La mang lại hương vị cà phê Đà Lạt"
        />
      }
    >
      <div className=" w-full pt-[61px] pb-[740px] md:pb-96">
        <Head src={post.srcImg} alt={post.altImg} />
        <div className="mx-auto max-w-5xl px-4 pt-10">
          <h2 className="pb-5 text-[20px] font-semibold">{post.title}</h2>
          <p className="pb-5 text-[17px] italic">
            {moment(post.date).format('LL')}
          </p>
          <article className="prose-base prose max-w-full space-y-1 text-black md:prose-base">
            <ReactMarkdown
              children={post.content}
              remarkPlugins={[remarkGfm]}
            />
          </article>
        </div>
        <div className="mx-auto max-w-7xl py-10">
          <BannerLast posts={posts.slice(0, 4)} title="BÀI VIẾT LIÊN QUAN" />
        </div>
      </div>
    </Main>
  );
};

export default BlogPage;
