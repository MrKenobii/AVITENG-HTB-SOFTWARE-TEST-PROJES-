import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Customer = db.define('customers',{
    name:{
        type: DataTypes.STRING
    },
    last_name:{
        type: DataTypes.STRING
    },
    user_name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});
 
export default Customer;