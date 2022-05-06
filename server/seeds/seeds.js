const db = require('../config/connection');
const { User, Services } = require('../models');

const userData = require('./seeds.json');
const serviceData = require('./services.json')

db.once('open', async () => {
  await User.deleteMany({});
  await Services.deleteMany({});

  const stylists = await User.insertMany(userData);
  const service = await Services.insertMany(serviceData);

  console.log('Stylists/Services seeded!');
  process.exit(0);
});
