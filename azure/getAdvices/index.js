module.exports = async function(context, req, advices) {
  // POST
  if (req.body) {
    console.log("Read data from database.\n\n");
    const databaseDefinition = { id: "advicesdb" };
    const collectionDefinition = { id: "advices" };
    const cosmos = require('@azure/cosmos');
    const CosmosClient = cosmos.CosmosClient;
    const masterKey = 'oiqH2tMAtcLObNslwe0ljwV3FsXqxWHkRSIb9SikwkkVXEsSTrgIXo311PnT8xyiOHaAnQ3KDnvl5aNieVyD3Q==';
    endpoint = 'https://kee.documents.azure.com:443/';
    client = new CosmosClient({ endpoint, auth: { masterKey } });

    const { database } = await client.databases.createIfNotExists(
      databaseDefinition
    );
    const { container } = await database.containers.createIfNotExists(
      collectionDefinition
    );

    const doc = await container.item(
      "e0asdfasfdeb6e85-176d-4ce6-89ae-1f699aaa0bab"
    );

    const { body: existingAdvice } = await doc.read();

    const updates = {
      media: "",
      title: "Title here",
      subTitle: "subTitle",
      speech: "hey this is blabla lbalbla"
    };

    Object.assign(existingAdvice, updates);
    try {
        await doc.replace(existingAdvice);
        context.log('Databse updated')

    } catch(e) {
        context.error('ERROR')
    }

    context.res.body = existingAdvice;
    // GET
  } else {
    context.res.body = advices;
  }
};
