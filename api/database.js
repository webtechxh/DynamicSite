"use strict"
var sqlite = require('sqlite');

module.exports.createTeamSchema = createTeamSchema;
module.exports.createUserSchema = createUserSchema;
module.exports.createTournamentSchema = createTournamentSchema;
module.exports.createUser = createUser;
module.exports.getUserByEmail = getUserByEmail;
module.exports.createTournament = createTournament;

async function createTeamSchema(){
  try {
        var db = await sqlite.open("./db.sqlite");
        await db.run("DROP TABLE IF EXISTS Team")
        await db.run("create table Team( id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(50) NOT NULL, desc VARCHAR(300) NOT NULL)");
        await db.run("INSERT INTO Team VALUES (1,'Alpha', 'Larem ipsum dolor sit amet')")
        await db.run("INSERT INTO Team VALUES (2,'Bravo', 'Borem ipsum dolor sit amet')")
        await db.run("INSERT INTO Team VALUES (3,'Charlie', 'Corem ipsum dolor sit amet')")
        var as = await db.all("select * from Team");
        console.log(as);
      } catch (e) { console.log(e); }
}

async function createUserSchema(){
  try {
        var db = await sqlite.open("./db.sqlite");
        await db.run("DROP TABLE IF EXISTS User")
        await db.run("CREATE TABLE User(email VARCHAR(100) PRIMARY KEY, password VARCHAR(20) NOT NULL, name VARCHAR(100) NOT NULL)");
        var as = await db.all("select * from User");
        console.log(as);
      } catch (e) { console.log(e); }
}

async function createTournamentSchema(){
  try {
        var db = await sqlite.open("./db.sqlite");
        await db.run("DROP TABLE IF EXISTS Tournament")
        await db.run("CREATE TABLE Tournament(" + "\n" +
                        "id INTEGER PRIMARY KEY AUTOINCREMENT," + "\n" +
                        "userEmail VARCHAR(100) NOT NULL," + "\n" +
                        "state VARCHAR(2500) NOT NULL," + "\n" +
                        "title VARCHAR(100) NULL," + "\n" +
                        "FOREIGN KEY (userEmail) REFERENCES User(email))");
        var as = await db.all("select * from Tournament");
        console.log(as);
      } catch (e) { console.log(e); }
}

async function createUser(email, password, name){
  try {
        var db = await sqlite.open("./db.sqlite");
        await db.run("INSERT INTO User(email, password, name) Values(?, ?, ?)", [email, password, name]);
        //var ps = db.prepare("INSERT INTO User Values(?, ?, ?)");
        //await ps.run(username, password, email);
        //await ps.finalize();
      } catch (e) { throw e; }
}

async function createTournament(userEmail, state, title){
  try {
        var db = await sqlite.open("./db.sqlite");
        await db.run("INSERT INTO Tournament(userEmail, state, title) Values(?, ?, ?)", [userEmail, state, title]);
        var as = await db.get("select id from Tournament ORDER BY id DESC LIMIT 1");
        console.log(as);
        console.log("testing testing");
        return as;
      } catch (e) { throw e; }
}

async function getUserByEmail(email){
  try {
        var db = await sqlite.open("./db.sqlite");
        var as = await db.get("select * from User where email = ?", [email]);
        console.log(as);
        return as;
      } catch (e) { throw e; }
}

async function getTournamentStateById(id){
  try{
    var db = await sqlite.open("./db.sqlite");
    var as = await db.get("select state from User where id = ?", [id]);
    console.log(as);
    return as;
  } catch (e) { throw e; }
}
