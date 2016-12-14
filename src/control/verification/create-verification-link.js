import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY || 'library';
const EXPIRATION = process.env.TOKEN_EXPIRATION || '24h';
const URL = process.env.VERIFICATION_URL;

export default class CreateVerificationLink {
    constructor(data, callback) {
        jwt.sign(data, SECRET_KEY, {expiresIn: EXPIRATION}, (err, token) => {
            console.log(token);
            callback(null, URL + token);
        });
    }
}