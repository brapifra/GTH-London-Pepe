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


    let advice = {};
    if (req.body && req.body.advice === '1') {
      advice = {
        media: "",
        title: "Title here",
        subTitle: "subTitle",
        speech: "hey this is blabla lbalbla"
      };
    } else {
      advice = {
        media: "",
        title: "Zombie apocalypse Escape Room",
        subTitle: "Fully accessible",
        card: {
          description: "Great Zombie experience visiting the best Scape room in the city",
          media: "insertFotoHere"
        },
        speech: "hey this is blabla lbalbla"
      };
    }

    try {
        await container.items.create(advice);
        context.log('Database updated')

    } catch(e) {
        context.error('ERROR')
    }

    context.res.body = advice;
    // GET
  } else {
    context.res.body = advices;
  }
};
