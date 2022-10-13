import type { NextApiRequest, NextApiResponse } from 'next';
import api from 'shared/api/dtos.mock';
import { PaymentDetails } from 'shared/types/payment';

interface Request extends NextApiRequest {
  query: {
    id: string;
  };
}

export default async function handler(req: Request, res: NextApiResponse<PaymentDetails>) {
  const dto = await api.fetch(req.query.id);

  if (!dto) {
    return res.status(404).end();
  }

  return res.status(200).json(dto);
}
