const util = require("util");
const mysql = require("mysql");
const {
  ACCOUNT_VALUES,
  ACCOUNT_CHANGE_VALUES,
} = require("./transactions-insert-values.js");
const {
  transferMoney,
  transferMoney2,
  insertTransfer,
} = require("./transaction.js");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabase = async () => {
  connection.connect();
  execQuery("DROP DATABASE IF EXISTS exercise_2");
  execQuery("CREATE DATABASE exercise_2");
  try {
    await execQuery("START TRANSACTION");
    await execQuery("USE exercise_2");
    await execQuery(`CREATE TABLE account(
                            account_number INT, 
                            balance FLOAT)`);
    await execQuery(`CREATE TABLE account_change(
                            change_number INT, 
                            account_number INT, 
                            amount FLOAT, 
                            changed_date DATETIME, 
                            remark VARCHAR(50))`);
    await ACCOUNT_VALUES.map((value) => {
      execQuery("INSERT INTO account SET?", value);
    });
    await ACCOUNT_CHANGE_VALUES.map((value) => {
      execQuery("INSERT INTO account_change SET ?", value);
    });
    await execQuery(transferMoney);
    await execQuery(transferMoney2);
    await execQuery(insertTransfer);

    await execQuery("COMMIT");
  } catch (err) {
    console.error(err);
    await execQuery("ROLLBACK");
    connection.end();
  }
  connection.end();
};

seedDatabase();
