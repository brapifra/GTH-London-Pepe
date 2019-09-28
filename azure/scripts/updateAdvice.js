const client = require('./db.js/index.js');

const databaseDefinition = { id: "advicesdb" };
const collectionDefinition = { id: "advices" };

const init = async () => {
  const { database } = await client.databases.createIfNotExists(databaseDefinition);
  const { container } = await database.containers.createIfNotExists(collectionDefinition);
  return { database, container };
}

const updateData = async ()  => {

  const { container } = await init();

  console.log('Read data from database.\n\n');
  // await container.items.create({
  //   "id": "e0asdfasfdeb6e85-176d-4ce6-89ae-1f699aaa0bab",
  //   "img": "blabla",
  //   "text": "blabla",
  //   "price": "bl2332abla",
  // });
  const doc = await container.item('e0asdfasfdeb6e85-176d-4ce6-89ae-1f699aaa0bab');

  const { body: existingAdvices } = await doc.read();

  const updates = { price: Number(existingAdvices.price) + 9999};

  Object.assign(existingAdvices, updates);

  await doc.replace(existingAdvices);

  console.log(`Data updated: ${JSON.stringify(existingAdvices)}`);
};

updateData().catch(err => {
  console.error(err);
});
