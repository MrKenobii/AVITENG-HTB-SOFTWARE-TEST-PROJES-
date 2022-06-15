import { Sequelize } from "sequelize";
 
const db = new Sequelize('assesment', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
      }
});
 
export default db;