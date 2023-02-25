const router = require("express").Router();
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/signup", async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
      },
    });
    console.log("hash: ", hashedPassword);
    res.send("done");
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });
    if (user === null) res.status(400).send("Cannot found user");
    else {
      if (await bcrypt.compare(req.body.password, user.password))
        res.send("Success");
      else res.send("Not Allowed");
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
