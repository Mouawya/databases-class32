const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

function getPopulation(Country, name, code, cb) {
  conn.connect();
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(result[0].Population);
    }
  );
  conn.end();
}

getPopulation("country", "c", "c' OR '1=1", console.log);


//securing the query against injection:
function getPopulation(Country, name, code, cb) {
  conn.connect();
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = ? and Code = ?`,
    [name, code],
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      console.log(result[0].Population);

      conn.end();
    }
  );
};
