const db = require("../config/connection");
const { User } = require("../models");

const userData = require("./seeds.json");
// const serviceData = require("./services.json");

db.once("open", async () => {
  await User.deleteMany({});
  // await Services.deleteMany({});

  await User.create(userData);
  // await Services.create(serviceData);

  console.log("Stylists/Services seeded!");
  process.exit(0);
});
