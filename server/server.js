const express = require("express");
const cors = require("cors");
const port = 8000;
const dbName = "authors";

require("./config/mongoose.config")(dbName);

const app = express();

app.use(express.json());
app.use(cors());

require("./routes/entry.routes")(app);

app.listen(port, () =>
  console.log(`Now listening on port: ${port}`)
);