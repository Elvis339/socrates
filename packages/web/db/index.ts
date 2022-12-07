import { PrismaClient } from '@prisma/client';

const getPrisma = () => {
  let prisma: any;

  return (): PrismaClient => {
    if (!prisma) {
      prisma = new PrismaClient();
    }

    return prisma;
  };
};

const prisma = getPrisma()();
export default prisma;
