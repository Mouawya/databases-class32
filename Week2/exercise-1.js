"use strict";
const { lchmodSync } = require("fs");
const mysql = require("mysql");
const util = require("util");
const { authorValues, researchPaperValues } = require("./data.js");
const {
  DROP_DATABASE,
  CREATE_DATABASE,
  USE_DATABASE,
  CREATE_AUTHOR_TABLE,
  CREATE_MENTOR_COLUMN,
  CREATE_FOREIGN_KEY,
  CREATE_RESEARCH_PAPER_TABLE,
  AUTHOR_NAMES_AND_CORRESPONDING_MENTORS,
  AUTHOR_COLUMNS_AND_THEIR_PAPER_TITLES,
  ALL_RESEARCH_PAPERS_AND_THE_NUMBER_OF_AUTHORS_WROTE_THAT_PAPER,
  SUM_OF_THE_RESEARCH_PAPERS_PUBLISHED_BY_ALL_FEMALE_AUTHORS,
  AVERAGE_OF_THE_H_INDEX_OF_ALL_AUTHORS_PER_UNIVERSITY,
  SUM_OF_THE_RESEARCH_PAPERS_OF_THE_AUTHORS_PER_UNIVERSITY,
  MINIMUM_AND_MAXIMUM_OF_THE_H_INDEX_OF_ALL_AUTHORS_PER_UNIVERSITY,
} = require("./queries.js");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

const execQuery = util.promisify(connection.query.bind(connection));

connection.connect((err) => {
  if (err) console.log(err);
  console.log("Connected!");
});

const seeDataBase = async () => {
  try {
    await execQuery(DROP_DATABASE);
    await execQuery(CREATE_DATABASE);
    await execQuery(USE_DATABASE);
    //exercise 1:
    await execQuery(CREATE_AUTHOR_TABLE);
    await execQuery(CREATE_MENTOR_COLUMN);
    await execQuery(CREATE_FOREIGN_KEY);
    //exercise 2:
    await execQuery(CREATE_RESEARCH_PAPER_TABLE);
    //exercise 3:
    await execQuery(AUTHOR_NAMES_AND_CORRESPONDING_MENTORS);
    await execQuery(AUTHOR_COLUMNS_AND_THEIR_PAPER_TITLES);
    //exercise 4:
    await execQuery(
      ALL_RESEARCH_PAPERS_AND_THE_NUMBER_OF_AUTHORS_WROTE_THAT_PAPER
    );
    await execQuery(SUM_OF_THE_RESEARCH_PAPERS_PUBLISHED_BY_ALL_FEMALE_AUTHORS);
    await execQuery(AVERAGE_OF_THE_H_INDEX_OF_ALL_AUTHORS_PER_UNIVERSITY);
    await execQuery(SUM_OF_THE_RESEARCH_PAPERS_OF_THE_AUTHORS_PER_UNIVERSITY);
    await execQuery(
      MINIMUM_AND_MAXIMUM_OF_THE_H_INDEX_OF_ALL_AUTHORS_PER_UNIVERSITY
    );

    await authorValues.map((value) =>
      execQuery("INSERT INTO author SET ?", value)
    );
    await researchPaperValues.map((value) =>
      execQuery("INSERT INTO research_paper SET ?", value)
    );
  } catch (error) {
    console.error(error);
  }

  connection.end();
};

seeDataBase();
