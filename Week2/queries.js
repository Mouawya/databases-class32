const DROP_DATABASE = "DROP DATABASE IF EXISTS research";
const CREATE_DATABASE = "CREATE DATABASE research";
const USE_DATABASE = "USE RESEARCH";

//exercise-1:
const CREATE_AUTHOR_TABLE = `CREATE TABLE author
  (author_no INT NOT NULL AUTO_INCREMENT, 
    author_name VARCHAR(30), 
    university VARCHAR(50), 
    date_of_birth DATE, h_index INT, 
    gender ENUM('f', 'm'), 
    PRIMARY KEY (author_no))`;

const CREATE_MENTOR_COLUMN = `ALTER TABLE author 
  ADD COLUMN mentor INT NOT NULL`;

const CREATE_FOREIGN_KEY = `ALTER TABLE author 
  ADD FOREIGN KEY (mentor) REFERENCES author(author_no)`;

//exercise-2:
const CREATE_RESEARCH_PAPER_TABLE = `CREATE TABLE research_paper
  (paper_id INT NOT NULL, 
    paper_title VARCHAR(100), 
    conference VARCHAR(50), 
    publish_date DATE, 
    FOREIGN KEY (paper_id) REFERENCES author(author_no))`;

//exercise-3:
const AUTHOR_NAMES_AND_CORRESPONDING_MENTORS = `SELECT author_name, mentor 
  FROM author`;

const AUTHOR_COLUMNS_AND_THEIR_PAPER_TITLES = `SELECT *, paper_title 
  FROM author 
  RIGHT JOIN research_paper 
  ON author.author_no = research_paper.paper_id`;

//exercise-4:
const ALL_RESEARCH_PAPERS_AND_THE_NUMBER_OF_AUTHORS_WROTE_THAT_PAPER = `SELECT paper_title, author_no
  FROM research_paper 
  INNER JOIN author 
  ON author.author_no = research_paper.paper_id`;

const SUM_OF_THE_RESEARCH_PAPERS_PUBLISHED_BY_ALL_FEMALE_AUTHORS = `SELECT SELECT COUNT(*)
  FROM research_paper
  INNER JOIN author
  ON research_paper.paper_id = author.author_no
  WHERE gender = 'f'`;

const AVERAGE_OF_THE_H_INDEX_OF_ALL_AUTHORS_PER_UNIVERSITY = `SELECT AVG(h_index), university 
  FROM author 
  GROUP BY university`;

const SUM_OF_THE_RESEARCH_PAPERS_OF_THE_AUTHORS_PER_UNIVERSITY = `SELECT COUNT(paper_title), university 
  FROM research_paper 
  INNER JOIN author 
  ON research_paper.paper_id = author.author_no 
  GROUP BY university`;

const MINIMUM_AND_MAXIMUM_OF_THE_H_INDEX_OF_ALL_AUTHORS_PER_UNIVERSITY = `SELECT MIN(h_index), MAX(h_index), university 
  FROM author 
  GROUP BY university`;

module.exports = {
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
};
