const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const port = 8000;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({
    data: {
      name: "yassine",
      email: "hadariyassine1@gmail.com",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

//-----------------MIDDLEWARES-----------------
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//-----------------ROUTE HANDLERS-----------------
const helloWorld = (req, res) => {
  res.status(200).json({ message: "Hello World!", app: "TMDB" });
};
const createUser = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};

//-----------------ROUTES-----------------
app.get("/", helloWorld);
app.post("/signup", createUser);

//-----------------START SERVER-----------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
