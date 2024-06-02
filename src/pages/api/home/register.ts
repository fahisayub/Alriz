import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { address, masjidId, userId } = req.body;

  if (!address || !masjidId || !userId) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const home = await prisma.home.create({
      data: {
        address,
        masjidId,
        userId,
      },
    });

    return res.status(200).json({ message: 'Home registered successfully', home });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
