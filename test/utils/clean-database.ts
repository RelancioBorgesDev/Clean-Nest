import { PrismaService } from '@/infra/database/prisma/prisma.service';

export async function cleanDatabase(prisma: PrismaService) {
  await prisma.comment.deleteMany({});
  await prisma.answer.deleteMany({});
  await prisma.question.deleteMany({});

  await prisma.user.deleteMany({});

  await prisma.attachment.deleteMany({});
}
