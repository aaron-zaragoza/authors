const Entry = require("../models/entry.model");

module.exports = {
  create: function (req, res) {
    console.log("create method executed");

    Entry.create(req.body)
      .then((entry) => { res.json(entry) })
      .catch((err) => { res.status(400).json(err) })
  },

  getAll(req, res) {
    console.log("getAll method executed");

    Entry.find()
      .then((cities) => { res.json(cities) })
      .catch((err) => { res.status(400).json(err) })
  },

  getOne(req, res) {
    console.log("Successfully got one entry: ", req.params);

    Entry.findById(req.params.id)
      .then((entry) => { res.json(entry) })
      .catch((err) => { res.status(400).json(err) })
  },

  delete(req, res) {
    console.log("delete method executed with params:", req.params);

    Entry.findByIdAndDelete(req.params.id)
      .then((entry) => { res.json(entry) })
      .catch((err) => { res.status(400).json(err) })
  },

  update(req, res) {
    console.log("update method executed with params:", req.params);

    Entry.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((entry) => { res.json(entry) })
      .catch((err) => { res.status(400).json(err) })
  },
};
