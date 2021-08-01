"use strict";

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

//Connecting with mysql
connection.connect((err) => {
  if (err) console.log(err);
  console.log("Connected!");
});

//sql function
const sql = (query, consoleMessage, values) => {
  connection.query(query, [values], (err, result) => {
    if (err) console.log(err);
    console.log(consoleMessage);
  });
};

//Creating invitee table
const invitee =
  "CREATE TABLE invitee(invitee_no INT, invitee_name VARCHAR(50), invited_by VARCHAR(50))";

//Creating room table
const room =
  "CREATE TABLE room(room_no INT, room_name VARCHAR(50), floor_number INT)";

//Creating meeting table
const meeting =
  "CREATE TABLE meeting(meeting_no INT, meeting_title TEXT, starting_time DATETIME, ending_time DATETIME, room_no INT)";

//Inserting rows into invitee table
const insertQueryInvitee =
  "INSERT INTO invitee(invitee_no, invitee_name, invited_by) VALUES ?";
const inviteeValues = [
  [1, "John", "Ali"],
  [2, "Mo", "Ali"],
  [3, "Steve", "Ali"],
  [4, "Nour", "Ali"],
  [5, "Samer", "Ali"],
];

//Inserting rows into room table
const insertQueryRoom =
  "INSERT INTO room(room_no, room_name, floor_number) VALUES ?";
const roomValues = [
  [75, "The Capital City", 1],
  [12, "Collective IQ", 1],
  [84, "Gig Gallery", 3],
  [23, "Alpha Room", 2],
  [45, "Fellowship Hall", 3],
];

//Inserting rows into meeting table
const insertQueryMeeting =
  "INSERT INTO meeting(meeting_no, meeting_title, starting_time, ending_time, room_no) VALUES ?";
const meetingValues = [
  [5, "Status Update", "2021-09-05:12:00", "2021-09-05:13:00", 75],
  [6, "Information Sharing ", "2021-09-05:12:00", "2021-09-05:13:00", 84],
  [7, "Decision Making", "2021-09-05:13:00", "2021-09-05:14:00", 23],
  [8, "Problem Solving ", "2021-09-05:13:00", "2021-09-05:14:00", 45],
  [9, "Innovation", "2021-09-05:12:00", "2021-09-05:13:00", 12],
];

sql("DROP DATABASE IF EXISTS meetup");
sql("CREATE DATABASE meetup", "Database created!");
sql("USE meetup", "meetup selected!");

sql(invitee, "invitee table created!");
sql(room, "room table created!");
sql(meeting, "meeting table created!");

sql(insertQueryInvitee, "record inserted!", inviteeValues);
sql(insertQueryRoom, "record inserted!", roomValues);
sql(insertQueryMeeting, "record inserted!", meetingValues);

connection.end();
