const db = require("../config/connection");
const { User } = require("../models");

const userData = require("./seeds.json");

db.once("open", async () => {
  await User.deleteMany({});

  await User.create(userData);

  console.log("Stylists/Services seeded!");
  process.exit(0);
});
