const client = require('./db.js/index.js');

const databaseDefinition = { id: "advicesdb" };
const collectionDefinition = { id: "advices" };

const init = async () => {
  const { database } = await client.databases.createIfNotExists(databaseDefinition);
  const { container } = await database.containers.createIfNotExists(collectionDefinition);
  return { database, container };
}

const getPriceChange = () => {
  const min = 100;
  const max = 999;
  const change = min + (Math.random() * (max - min));
  const value = Math.round(change);
  return parseFloat((value / 100).toFixed(2));
}

const getStockChangeValues = (existingStock) => {
  const isChangePositive = !(existingStock.changeDirection === '+');
  const change = getPriceChange();
  let price = isChangePositive ? existingStock.price + change : existingStock.price - change;
  price = parseFloat(price.toFixed(2));
  return {
    "price": price,
    "change": change,
    "changeDirection": isChangePositive ? '+' : '-'
  };
};

const updateData = async ()  => {

  const { container } = await init();

  console.log('Read data from database.\n\n');
  await container.items.create({
    "id": "e0asdfasfdeb6e85-176d-4ce6-89ae-1f699aaa0bab",
    "img": "blabla",
    "text": "blabla",
    "price": "bl2332abla",
  });
  const doc = await container.item('e0asdfasfdeb6e85-176d-4ce6-89ae-1f699aaa0bab');

  const { body: existingStock } = await doc.read();

  // const updates = getStockChangeValues(existingStock);
  const updates = {
    price: '123443'
  }
  Object.assign(existingStock, updates);

  await doc.replace(existingStock);

  console.log(`Data updated: ${JSON.stringify(existingStock)}`);
};

updateData().catch(err => {
  console.error(err);
});
