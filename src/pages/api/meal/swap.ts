import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { homeId, mealType, newDate } = req.body;

    if (!homeId || !mealType || !newDate) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const swapRequest = await prisma.swapRequest.create({
        data: {
          homeId,
          mealType,
          newDate,
          status: 'PENDING',
          requestedBy: homeId, // Assuming the homeId is the user making the request
        },
      });

      return res.status(200).json({ message: 'Swap request submitted successfully', swapRequest });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    try {
      const swapRequests = await prisma.swapRequest.findMany();
      return res.status(200).json(swapRequests);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
