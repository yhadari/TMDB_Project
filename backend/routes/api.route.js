// ROUTER
const router = require("express").Router();

// BCRYPT
const bcrypt = require("bcrypt");

// JTW
const jwt = require("jsonwebtoken");

// PRISMA
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// SIGNUP
router.post("/signup", async (req, res, next) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  if (user) {
    return res.status(400).json({ error: "username already exist" });
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
      },
    });
    res.json({ message: "Signed in successfully 😊 👌" });
  } catch (error) {
    next(error);
  }
});

// LOGIN
router.post("/login", async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });
    if (user === null) res.status(400).send("Cannot found user");
    else {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.setHeader("Set-Cookie", `access_token=${accessToken}`);
        res.send("Your are logged in");
      } else {
        res.send("Not Allowed");
      }
    }
  } catch (error) {
    next(error);
  }
});

// AUTH
const authenticateToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.sendStatus(401);
  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = data;
    next();
  } catch (error) {
    return res.sendStatus(403);
  }
};

router.get("/username", authenticateToken, async (req, res, next) => {
  try {
    const username = await prisma.user.findUnique({
      where: {
        username: req.user.username,
      },
    });
    res.json({ username });
  } catch (error) {
    next(error);
  }
});

module.exports = router;