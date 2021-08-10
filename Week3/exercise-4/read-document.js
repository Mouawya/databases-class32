const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://Mouawya:World@mycluster.9yqfw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await readDocumentByName(client, "Judaydet Artoez");
    // await readDocumentByCountryCode(client, "SYR");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

main().catch(console.error);

//reading the document by the city name:
async function readDocumentByName(client, nameOfCity) {
  const result = await client
    .db("world")
    .collection("city")
    .findOne({ Name: nameOfCity });

  if (result) {
    console.log(result);
  } else {
    console.log(`City with the name: ${nameOfCity} NOT found`);
  }
};

//reading by the county code we use the same function but we replace the Name by CountryCode:
async function readDocumentByCountryCode(client, CodeOfCountry) {
  const result = await client
    .db("world")
    .collection("city")
    .findOne({ CountryCode: CodeOfCountry });

  if (result) {
    console.log(result);
  } else {
    console.log(`City with the country code: ${CodeOfCountry} NOT found`);
  }
};
