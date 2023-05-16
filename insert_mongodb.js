const MongoClient = require('mongodb').MongoClient;

async function insertName() {
  const uri = 'mongodb://admin:password@localhost:32000/?authMechanism=DEFAULT';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    const name = 'John Smith';
    const document = { name: name };
    const result = await collection.insertOne(document);
    console.log('Name inserted:', result.insertedId);
  } finally {
    await client.close();
  }
}

insertName();
