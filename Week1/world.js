"use strict";

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

connection.connect((err) => {
  if (err) console.log(err);
});

//sql function
const sql = (query, consoleMessage) => {
  connection.query(query, (err, result) => {
    if (err) console.log(err);
    console.log(consoleMessage);
    result.forEach((obj) => console.log(obj.name));
  });
};

//Question 1:
sql(
  "SELECT name FROM country WHERE population > 8000000",
  "Countries with population greater than 8 million:"
);

//Question 2:
sql(
  "SELECT name FROM country WHERE name LIKE '%land%' ",
  "Countries that have “land” in their names:"
);

//Question 3:
sql(
  "SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000",
  "Cities with population in between 500,000 and 1 million:"
);

//Question 4:
sql(
  "SELECT name FROM country WHERE continent = 'Europe'",
  "All the countries on the continent ‘Europe’:"
);

//Question 5:
sql(
  "SELECT name FROM country ORDER BY surfaceArea DESC",
  "All the countries in the descending order of their surface areas:"
);

//Question 6:
sql(
  "SELECT name FROM city WHERE countryCode = 'NLD' ",
  "All the cities in the Netherlands:"
);

//Question 7:
connection.query(
  "SELECT population FROM city WHERE name = 'Rotterdam' ",
  (err, result) => {
    if (err) console.log(err);
    console.log("The population of Rotterdam:");
    result.forEach((obj) => console.log(obj.population));
  }
);

//Question 8:
sql(
  "SELECT name FROM country ORDER BY surfaceArea DESC LIMIT 10",
  "The top 10 countries by Surface Area:"
);

//Question 9:
sql(
  "SELECT name FROM city ORDER BY population DESC LIMIT 10 ",
  "The top 10 most populated cities:"
);

//Question 10:
connection.query("SELECT SUM(population) FROM country", (err, result) => {
  if (err) console.log(err);
  console.log(
    `The population number of the world: ${Object.values(result[0])[0]}`
  );
});

connection.end();
