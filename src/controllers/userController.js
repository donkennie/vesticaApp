const database = require("../database/connection")
const { passwordHash, passwordCompare } = require("../utils/bcrypt")
const { jwtSign, jwtVerify } = require("../utils/jwt")
const response = require("../utils/responseApi")

exports.createNewUser = async (req, res, next) => {
    try {
        const {firstname, lastname, email, password} = req.body;
        //check if email already exists
        const [row] = await database.query(`SELECT * FROM users WHERE email = ?`, [
            email,
        ]);
        if(row.length > 0){
            return res.status(409).json({
                status: 400,
                message: "Email already in use"
            });
        }
        //hash password
        const hashedPassword = await passwordHash(password);
        const user = await database.query(`INSERT INTO users (firstname, lastname, email, password) 
                                        VALUES(?,?,?,?)' [firstname, lastname, email, password]`
                                        );

        let data = {
            id: user[0].insertId,
            firstname,
            lastname,
            email,
        }
        
        const token = await jwtSign(data)
        return response(res, 200, "User created successfully", {
            token,
            data,
        });

    } catch (error) {
        next(error)
    }
};