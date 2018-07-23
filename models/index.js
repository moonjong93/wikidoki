import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../configs/database'


let env = process.env.NODE_ENV || "dev",
sequelize = new Sequelize(config[env].database, config[env].username, config[env].passsword, {
  host: config[env].host,
  dialect: config[env].dialect,
  pool: config[env].pool,
  operatorsAliases: false
}),
db = {}

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach((file) => {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;