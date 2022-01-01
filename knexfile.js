const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = "postgres://dmhiluxb:3oaU5JymToWXkY4A38vAyiIFIaPKVWPJ@kashin.db.elephantsql.com/dmhiluxb";

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
