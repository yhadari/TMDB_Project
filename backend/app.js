const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 3000;

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
  res.send("Done");
};

//-----------------ROUTES-----------------
app.get("/", helloWorld);
app.post("/signup", createUser);

//-----------------START SERVER-----------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
