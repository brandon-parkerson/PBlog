const { PrismaClient } = require("../generated/prisma");
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

async function getUser(id) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (err) {
    const errMessage = "not a valid user";
    return errMessage;
  }
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
  try {
    const posts = await prisma.post.findMany();
    console.log(posts);
    return posts;
  } catch (err) {
    const errMessage = "No posts";
    return errMessage;
  }
}

async function getPost(id) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return post;
  } catch (err) {
    const errMessage = "Post does not exist";
    return errMessage;
  }
}

async function getAllCommentsForPost(postId) {
  const comments = await prisma.post;
  console.log(comments);
  return comments;
}

module.exports = {
  createUser,
  getUser,
  getAllUsers,
  deleteUser,
  getAllPosts,
  getPost,
  getAllCommentsForPost,
};
