const db = require("../config/connection");
const { User, Service } = require("../models");

const userData = require("./seeds.json");
const serviceData = require("./services.json");

db.once("open", async () => {
  await User.deleteMany({});
  await Service.deleteMany({});

  await User.create(userData);
  await Service.create(serviceData);

  console.log("Stylists/Services seeded!");
  process.exit(0);
});
