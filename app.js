const express = require("express");

const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

//routes
app.use("/", router);

app.listen(PORT, (req, res) => {
  console.log(`Servidor listen on port ${PORT}`);
});
