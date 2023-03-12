let config = require('./config');
let jwt = require('jsonwebtoken');
let { UNAUTHORIZED } = require( "http-status-codes");
const checkLogin = async (req,res,next) => {
    let authorization = req.headers['authorization'];
    if (authorization) {
        try {
            let user = jwt.verify(authorization.split(' ')[1], config.secret);
            req.user = user;
            return next();
        } catch (err) {
            return res.status(UNAUTHORIZED).send({});
        }
    } else {
        return res.status(UNAUTHORIZED).send({});
    }
};
module.exports = checkLogin;