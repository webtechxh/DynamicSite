"use strict"
var sqlite = require('sqlite');

module.exports.createTeamSchema = createTeamSchema;
module.exports.createUserSchema = createUserSchema;
module.exports.createUser = createUser;
module.exports.getUserByUsername = getUserByUsername;

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
        await db.run("CREATE TABLE User(username VARCHAR(20) PRIMARY KEY, password VARCHAR(20) NOT NULL, email VARCHAR(50) NOT NULL)");
        var as = await db.all("select * from User");
        console.log(as);
      } catch (e) { console.log(e); }
}

async function createUser(username, password, email){
  try {
        var db = await sqlite.open("./db.sqlite");
        var as = await db.all("select * from User");
        console.log(as);
        await db.run("INSERT INTO User(username, password, email) Values(?, ?, ?)", [username, password, email]);
        //var ps = db.prepare("INSERT INTO User Values(?, ?, ?)");
        //await ps.run(username, password, email);
        //await ps.finalize();
      } catch (e) { throw e; }
}

async function getUserByUsername(username){
  try {
        var db = await sqlite.open("./db.sqlite");
        var as = await db.get("select * from User where username = ?", [username]);
        return as;
        console.log(as);
      } catch (e) { throw e; }
}
