/* eslint-disable react/no-children-prop */
import axios from 'axios';
import { API_URL } from 'config';
import type { Post } from 'config/postConfig';
import moment from 'moment';
import type { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import BannerLast from '@/components/blog/BannerLast';
import { Head } from '@/components/blog/Head';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface Iprops {
  post: Post;
  posts: Post[];
}

const BlogPage = (props: Iprops) => {
  const { post, posts } = props;
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
          <BannerLast posts={posts} title="BÀI VIẾT LIÊN QUAN" />
        </div>
      </div>
    </Main>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps = async ({
  query: { slug },
}) => {
  const res = await axios.get(`${API_URL}/posts/${slug}`);
  const resPostAll = await axios.get(`${API_URL}/posts`);
  const post = res.data;
  const posts = resPostAll.data.slice(0, 4);
  return {
    props: {
      post,
      posts,
    },
  };
};
