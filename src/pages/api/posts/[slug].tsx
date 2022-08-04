/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

import data from './data.json';

const { posts } = data;

export default (req: NextApiRequest, res: NextApiResponse) => {
  const postsArticle = posts.filter((post) => post.slug === req.query.slug);
  if (req.method === 'GET') {
    res.status(200).json(postsArticle[0]);
  }
};
