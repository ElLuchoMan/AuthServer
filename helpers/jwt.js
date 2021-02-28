const jwt = require('jsonwebtoken');
const generarJWT = (uid, name) => {
    const payload = { uid, name };
    //Se crea una promesa con el token
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                //Todo bien
                console.log(err);
                reject(err);
            } else {
                //Todo mal
                resolve(token);
            }
        })
    });
}
module.exports={generarJWT}