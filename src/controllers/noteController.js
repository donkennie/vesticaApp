const database = require("../database/connection")
const response = require("../utils/responseApi")

exports.createNewNote = async (req, res, next) => {
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

        const updateNote = await database.query(`UPDATE notes SET title= ?,  description = ? WHERE id = ? `, [notes.title, notes.description, id],
        (err, res) => { 
            if (err) { 
              console.log("error: ", err); 
              result(null, err); 
              return; 
            } 
        });

        if (res.affectedRows == 0) { 
            // not found employee with the id 
            result({ kind: "not_found" }, null); 
            return; 
          }

          let data = {
            id: updateNote[0].insertId,
            title,
            description,
          }

          return response(res, 201, "Updated successfully", {
            data,
          });       

    } catch (error) {
        next(error);
    }
};

exports.getAllNotes = async (req, res, next) => {
    try {
        const notes = await database.query(`SELECT * FROM notes`);
        return response(res, 200, "All notes", notes[0]);

    } catch (error) {
        next(error);
    }
}

exports.getNoteById = async (req, res, next) => {
    try {
        const {id} = req.params.id;

        const note = await database.query(`SELECT * FROM  notes WHERE id = ?`, [id])
        if (row.length === 0) {
            return res.status(404).json({
              status: 404,
              message: 'Grant not found',
            });
        }

        let data = {
            id: note[0].id
        }

        return response(res, 201, "Data fetched successfully", data);

    } catch (error) {
        next(error)
    }
};


exports.deleteNote = async (req, res, next) => {
    try {
        const {id} = req.params.id;

        const note = await database.query(`DELETE FROM notes WHERE id = ?`, [id])
        if (row.length === 0) {
            return res.status(404).json({
              status: 404,
              message: 'Grant not found',
            });
        }

        let deletedNote = {
            id: note[0].insertId
        } 
        
        return response(res, 201, "Deleted successfully", deletedNote);
    } catch (error) {
        next(error)
    }
};