const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

async function main() {
  // queries here

  await prisma.user.create({
    data: {
      firstName: "Brandon",
      lastName: "Parkerson",
      email: "brandonparkerson03@gmail.com",
      password: "123",
      isAuthor: "yes",
    },
  });
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
