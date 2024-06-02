import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, address, contactInfo, adminId } = req.body;

  if (!name || !address || !contactInfo || !adminId) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const masjid = await prisma.masjid.create({
      data: {
        name,
        address,
        contactInfo,
        adminId,
      },
    });

    return res.status(200).json({ message: 'Masjid created successfully', masjid });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
