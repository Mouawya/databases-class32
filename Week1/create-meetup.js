"use strict";

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

//Connecting with mysql
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

connection.query("DROP DATABASE meetup");

//Creating meetup database
connection.query("CREATE DATABASE meetup", (err, res) => {
  if (err) throw err;
  console.log("Database created!");
});

connection.query("USE meetup", (err) => {
  if (err) throw err;
  console.log("meetup selected!");
});

//Creating invitee table
const invitee =
  "CREATE TABLE invitee(invitee_no INT, invitee_name TEXT, invited_by TEXT)";
connection.query(invitee, (err, result) => {
  if (err) throw err;
  console.log("Invitee table created!");
});

//Creating room table
const room =
  "CREATE TABLE room(room_no INT, room_name TEXT, floor_number TEXT)";
connection.query(room, (err, result) => {
  if (err) throw err;
  console.log("Room table created!");
});

//Creating meeting table
const meeting =
  "CREATE TABLE meeting(meeting_no INT, meeting_title TEXT, starting_time TIME, ending_time TIME, room_no INT)";
connection.query(meeting, (err, result) => {
  if (err) throw err;
  console.log("Meeting table created!");
});

//Inserting rows into invitee table
const sql =
  "INSERT INTO invitee(invitee_no, invitee_name, invited_by) VALUES ?";
const values = [
  [1, "John", "Ali"],
  [2, "Mo", "Ali"],
  [3, "Steve", "Ali"],
  [4, "Nour", "Ali"],
  [5, "Samer", "Ali"],
];
connection.query(sql, [values], (err, result) => {
  if (err) throw err;
  console.log("records inserted!");
});

//Inserting rows into room table
const sql2 = "INSERT INTO room(room_no, room_name, floor_number) VALUES ?";
const values2 = [
  [75, "The Capital City", "1st"],
  [12, "Collective IQ", "1st"],
  [84, "Gig Gallery", "3d"],
  [23, "Alpha Room", "2d"],
  [45, "Fellowship Hall", "3d"],
];
connection.query(sql2, [values2], (err, result) => {
  if (err) throw err;
  console.log("records inserted!");
});

//Inserting rows into meeting table
const sql3 =
  "INSERT INTO meeting(meeting_no, meeting_title, starting_time, ending_time, room_no) VALUES ?";
const values3 = [
  [5, "Status Update", "12:00", "13:00", 75],
  [6, "Information Sharing ", "12:00", "13:00", 84],
  [7, "Decision Making", "13:00", "14:00", 23],
  [8, "Problem Solving ", "13:00", "14:00", 45],
  [9, "Innovation", "12:00", "13:00", 12],
];
connection.query(sql3, [values3], (err, result) => {
  if (err) throw err;
  console.log("records inserted!");
});
