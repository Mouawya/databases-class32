const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://Mouawya:World@mycluster.9yqfw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await deleteCity(client, "Judaydet Artoez");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

main().catch(console.error);

///delete a city:
async function deleteCity(client, nameOfCity) {
  const result = await client
    .db("world")
    .collection("city")
    .deleteOne({ Name: nameOfCity });

  console.log(`${result.deletedCount} document(s) was/were deleted!`);
};
