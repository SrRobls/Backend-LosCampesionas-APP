const PORT = process.env.PORT || 3500;
const connectionString = "mongo://localhost:27017/";
let dbName = "DbLosCampesinosApp";

module.exports = {
    PORT,
    connectionString,
    dbName
}