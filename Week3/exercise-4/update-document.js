const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://Mouawya:World@mycluster.9yqfw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await updatePopulation(client, "Judaydet Artoez", { Population: 150000 });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

main().catch(console.error);

//update city population:
async function updatePopulation(client, nameOfCity, updatedPopulation) {
  await client
    .db("world")
    .collection("city")
    .updateOne({ Name: nameOfCity }, { $set: updatedPopulation });
};
