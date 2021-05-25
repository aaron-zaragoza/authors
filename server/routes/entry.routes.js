const entryController = require("../controllers/entry.controller");

module.exports = (app) => {
  app.post("/api/entries", entryController.create);
  app.get("/api/entries", entryController.getAll);
  app.get("/api/entries/:id", entryController.getOne);
  app.delete("/api/entries/:id", entryController.delete);
  app.put("/api/entries/:id", entryController.update);
};
