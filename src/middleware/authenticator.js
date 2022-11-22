const {jwtVerify} = require("../utils/jwt");
const applicationError = require("./applicationError");

const checkForUserValidation = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token)
        {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }

        const decoded = await jwtVerify(token);
        if(!decoded){
            throw new Error('Invalid token');
        }
        req.user = decoded;
        console.log('===req.user');
        console.log(req.user);
        console.log('===req.user');

        next();

    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized...' });
    }
};

const validateAdmin = (req, res, next) => {
    try {
        if(req.user.role !== 'Admin'){
            throw new applicationError(
                "You are not authorized to perform this",
                401,
            );
        }

        next();
    } catch (error) {
        next(e);
    }
};

module.exports = {checkForUserValidation, validateAdmin};