import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const swapRequest = await prisma.swapRequest.update({
        where: { id },
        data: { status: 'REJECTED' },
      });

      return res.status(200).json({ message: 'Swap request rejected successfully', swapRequest });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
