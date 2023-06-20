const express = require("express");
const router = express.Router();
const { users, user, editUser, deleteUser } = require("./consultas");

router.get("/", (req, res) => {
  res.send("Servidor en Express");
});

router.get("/users", async (req, res) => {
  const result = await users();
  res.json(result);
});

router.post("/user", async (req, res) => {
  const { name, email, age } = req.body;
  const result = await user(name, email, age);
  res.send("user created");
});

router.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  await editUser(name, email, age, id);
  res.send("user modifified");
});

router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  await deleteUser(id);
  res.send("user deleted");
});

module.exports = router;
