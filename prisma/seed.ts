import { PrismaClient, Role } from '@prisma/client';
const { ADMIN_MAIL, ADMIN_PASSWORD } = process.env;
async function main() {
  console.log(`Start seeding ...`);
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      email: ADMIN_MAIL,
      password: ADMIN_PASSWORD,
      name: 'Admin',
      role: Role.ADMIN,
    },
  });

  await prisma.$disconnect();
  console.log(`Seeding finished.`);
}

main()
  .then(() => {
    console.log('Seeding completed');
    process.exit();
  })
  .catch(async (e) => {
    console.error(e);
    process.exit();
  });
