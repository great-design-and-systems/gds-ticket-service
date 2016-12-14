import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY || 'library';
const EXPIRATION = process.env.TOKEN_EXPIRATION || '24h';
const URL = process.env.VERIFICATION_URL;

export default class VerifyToken {
    constructor(token, callback) {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                global.gdsLogger.logError(err);
                callback({
                    message: err.name + ': ' + err.message
                });
            } else {
                console.log(decoded);
                callback(null, decoded);
            }
        });
    }
}