const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

async function createUser(firstName, lastName, email, password, isAuthor) {
  await prisma.user.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      isAuthor: isAuthor,
    },
  });
}

async function getAllUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
  return users;
}

async function deleteUser(id) {
  const user = await prisma.user.delete({
    where: {
      id: id,
    },
  });
}

async function getAllPosts() {
  const posts = await prisma.post.findMany();
  console.log(posts);
  return posts;
}

async function getPost(id) {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
}

async function getAllComments() {
  const comments = await prisma.comment.findMany();
  console.log(comments);
  return comments;
}

module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  getAllPosts,
  getPost,
  getAllComments,
};
