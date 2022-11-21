const { response } = require("express");
const database = require("../database/connection")
const response = require("../utils/responseApi")

exports.CreateNewNote = async (req, res, next) => {
    try {
        const {
            title,
            description
        } = req.body;

        const {id} = req.user;

        const createNote = await database.query(
            `INSERT INTO notes (title, description) VALUES(?,?)`, 
            [title, description]
        );

        let data = {
            id: createNote[0].insertId,
            title,
            description
        }

        return response(res, 200, "Note created successfully",{
            data,
        })

    } catch (error) {
        next(error)
    }
};

exports.editNote = async (req, res, next) => {
    try {
        const {
            title,
            description
        } = req.body;
    } catch (error) {
        
    }
}