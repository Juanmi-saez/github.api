const validator = require('express-joi-validation')({ passError: true });
const controller = require('./auth.controller')
const schemas = require('./auth.schemas')

const joiNoConvertconfig = { joi: { convert: false, allowUnknown: true } };

function register(app) {
    app.post(
        '/user/signUp',
        validator.body(schemas.singUpUser.body,joiNoConvertconfig),
        validator.headers(schemas.singUpUser.headers),
        controller.singUpUser
    );
    app.get(
        '/user/login/:email/:password',
        validator.params(schemas.logIn.params),
        validator.headers(schemas.logIn.headers),
        controller.logIn
    );
}


module.exports={
    register
}
