const client = require('./db.js');

const databaseDefinition = { id: "advicesdb" };
const collectionDefinition = { id: "advices" };

const setupAndSeedDatabase = async ()  => {

  // const { database: db } = await client.databases.create(databaseDefinition);
  // console.log('Database created.');

  // const { container } = await db.containers.create(collectionDefinition);
  // console.log('Collection created.');

  // await container.items.create({
  //   "id": "e0asdfasfdeb6e85-176d-4ce6-89ae-1f699aaa0bab",
  //   "img": "blabla",
  //   "text": "blabla",ss
  //   "price": "bl2332abla",
  // });

  // await container.items.create({
  //   "id": "ebe2e863-bf84-439a-89f8-39975e7d6766",
  //   "symbol": "DEF",
  //   "price": "45.89",
  //   "change": "1.25",
  //   "changeDirection": "-"
  // });

  // await container.items.create({
  //   "id": "80bc1751-3831-4749-99ea-5c6a63105ae7",
  //   "symbol": "GHI",
  //   "price": "156.21",
  //   "change": "6.81",
  //   "changeDirection": "+"
  // });

  console.log('Seed data added.');
};

setupAndSeedDatabase().catch(err => {
  console.error('Error setting up database:', err);
});
