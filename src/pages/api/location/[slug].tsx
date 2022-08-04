/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';

import data from './data.json';

const { address } = data;

export default (req: NextApiRequest, res: NextApiResponse) => {
  const addArticle = address.filter((add) => add.slug === req.query.slug);
  if (req.method === 'GET') {
    res.status(200).json(addArticle[0]);
  }
};
