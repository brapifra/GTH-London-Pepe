module.exports = async function(context, req, advices) {
  // POST
  if (req.body) {
    console.log("Read data from database.\n\n");
    const databaseDefinition = { id: "advicesdb" };
    const collectionDefinition = { id: "advices" };
    const cosmos = require('@azure/cosmos');
    const CosmosClient = cosmos.CosmosClient;
    // LOL
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
      "c2d9d314-a933-39a6-afc9-4bc61d8c1c0e"
    );

    const { body: existingAdvice } = await doc.read();

    const updates = {
      media: "",
      title: "Zombie apocalypse Escape Room",
      subTitle: "Fully accessible",
      card: {
        description: "Great Zombie experience visiting the best Scape room in the city",
        media: "insertFotoHere"
      },
      speech: "hey this is blabla lbalbla"
    };

    Object.assign(existingAdvice, updates);
    try {
        await doc.replace(existingAdvice);
        context.log('Databse updated')


    // try {
    //     await container.items.create(advice);
    //     context.log('Database updated')

    } catch(e) {
        context.error('ERROR')
    }

    context.res.body = updates;
    // GET
  } else {
    context.res.body = advices;
  }
};
