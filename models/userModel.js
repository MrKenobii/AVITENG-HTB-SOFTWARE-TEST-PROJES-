import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const User = db.define('users',{
    name:{
        type: DataTypes.STRING
    },
    last_name:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    user_pass:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});
 
export default User;