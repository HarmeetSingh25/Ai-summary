import { DataTypes } from "sequelize";
import { sequelize } from "../confg/db.js";
const userSchema = sequelize.define("user", {
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
export default userSchema
