const path = require("path");
const propertiesReader = require("properties-reader");
const { MongoClient, ServerApiVersion } = require("mongodb");

const propertiesPath = path.resolve(__dirname, "conf/db.properties");
const properties = propertiesReader(propertiesPath);

const dbPrefix = properties.get("db.prefix");
const dbUsername = encodeURIComponent(properties.get("db.user"));
const dbPwd = encodeURIComponent(properties.get("db.pwd"));
const dbName = properties.get("db.dbName");
const dbParams = properties.get("db.params");
const dbUrl = properties.get("db.dbUrl");

const uri = dbPrefix + dbUsername + ":" + dbPwd + dbUrl + dbParams;

const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
const db = client.db(dbName);

module.exports = { db };
