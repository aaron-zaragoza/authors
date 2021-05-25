const mongoose = require("mongoose");

module.exports = (dbName) => {
  mongoose
    .connect(`mongodb://localhost/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log(`Successfully connected to database: ${dbName}`);
    })
    .catch((err) => {
      console.log(`Failed to connect to databse ${dbName}:`, err);
    });
};
