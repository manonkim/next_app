import { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';

const withHandler = (
  method: 'GET' | 'POST',
  fn: (req: NextApiRequest, res: NextApiResponse) => void
) => {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      return res.status(405).end();
    }

    try {
      await fn(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };
};

export default withHandler;
