"use strict";

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

connection.connect((err) => {
  if (err) throw err;
});

//Question 1:
connection.query(
  "SELECT name FROM country WHERE population > 8000000",
  (err, result) => {
    if (err) throw err;
    console.log("Countries with population greater than 8 million:");
    result.forEach((obj) => console.log(obj.name));
  }
);
//Question 2:
connection.query(
  "SELECT name FROM country WHERE name LIKE '%land%' ",
  (err, result) => {
    if (err) throw err;
    console.log("Countries that have “land” in their names:");
    result.forEach((obj) => console.log(obj.name));
  }
);
//Question 3:
connection.query(
  "SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000",
  (err, result) => {
    if (err) throw err;
    console.log("Cities with population in between 500,000 and 1 million:");
    result.forEach((obj) => console.log(obj.name));
  }
);
//Question 4:
connection.query(
  "SELECT name FROM country WHERE continent = 'Europe'",
  (err, result) => {
    if (err) throw err;
    console.log("All the countries on the continent ‘Europe’:");
    result.forEach((obj) => console.log(obj.name));
  }
);

//Question 5:
connection.query(
  "SELECT name FROM country ORDER BY surfaceArea DESC ",
  (err, result) => {
    if (err) throw err;
    console.log(
      "All the countries in the descending order of their surface areas:"
    );
    result.forEach((obj) => console.log(obj.name));
  }
);

//Question 6:
connection.query(
  "SELECT name FROM city WHERE countryCode = 'NLD' ",
  (err, result) => {
    if (err) throw err;
    console.log("All the cities in the Netherlands:");
    result.forEach((obj) => console.log(obj.name));
  }
);

//Question 7:
connection.query(
  "SELECT population FROM city WHERE name = 'Rotterdam' ",
  (err, result) => {
    if (err) throw err;
    console.log("The population of Rotterdam:");
    result.forEach((obj) => console.log(obj.population));
  }
);

//Question 8:
connection.query(
  "SELECT name FROM country ORDER BY surfaceArea DESC LIMIT 10 ",
  (err, result) => {
    if (err) throw err;
    console.log("The top 10 countries by Surface Area:");
    result.forEach((obj) => console.log(obj.name));
  }
);

//Question 9:
connection.query(
  "SELECT name FROM city ORDER BY population DESC LIMIT 10 ",
  (err, result) => {
    if (err) throw err;
    console.log("The top 10 most populated cities:");
    result.forEach((obj) => console.log(obj.name));
  }
);

//Question 10:
connection.query("SELECT SUM(population) FROM country", (err, result) => {
  if (err) throw err;
  console.log(
    `The population number of the world: ${Object.values(result[0])[0]}`
  );
});
