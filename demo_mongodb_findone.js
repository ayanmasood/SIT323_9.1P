const MongoClient = require('mongodb').MongoClient;

async function findDocumentByName() {
  const uri = 'mongodb://admin:password@localhost:32000/?authMechanism=DEFAULT';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    const name = 'John Doe';
    const query = { name: name };
    const document = await collection.findOne(query);
    console.log('Found document:', document);
  } finally {
    await client.close();
  }
}

findDocumentByName();
