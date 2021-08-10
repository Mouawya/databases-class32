const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://Mouawya:World@mycluster.9yqfw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await createDocument(client, {
      Name: "Judaydet Artoez",
      CountryCode: "SYR",
      District: "Damascus suburb",
      Population: 100000,
    });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

main().catch(console.error);

//create a new document:
async function createDocument(client, newCity) {
  const result = await client.db("world").collection("city").insertOne(newCity);

  console.log(result);
};
