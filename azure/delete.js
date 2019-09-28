const databaseDefinition = { id: "advicesdb" };
const collectionDefinition = { id: "advices" };

const deleteDB = async ()  => {
  const cosmos = require('@azure/cosmos');
  const CosmosClient = cosmos.CosmosClient;
  const masterKey = '';
  endpoint = 'https://kee.documents.azure.com:443';
  client = new CosmosClient({ endpoint, auth: { masterKey } });
  // const { db } = await client.database(databaseDefinition.id).createIfNotExists(
  //   collectionDefinition
  // );
  const { database: db, container } = await client.database(databaseDefinition.id).container(collectionDefinition.id);
  // console.log(db);
  console.log(db.container(collectionDefinition.id).delete());
  await client.database(databaseId).container(containerId).item(itemBody.id, itemBody.Country).delete(itemBody);


  // await client.database(databaseDefinition.id).delete();
  // container.delete();
  console.log(`Removed collections`);
};

deleteDB().catch(err => {
  console.error(err);
});
