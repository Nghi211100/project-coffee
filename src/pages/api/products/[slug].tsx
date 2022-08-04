/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

import data from './data.json';

const { products } = data;

export default (req: NextApiRequest, res: NextApiResponse) => {
  const productsArticle = products.filter(
    (product) => product.slug === req.query.slug
  );
  if (req.method === 'GET') {
    res.status(200).json(productsArticle[0]);
  }
};
