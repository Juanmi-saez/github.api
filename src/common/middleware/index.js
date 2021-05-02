const {TOKEN_SECRET} = require('../../config')
const jwt = require('jwt-simple')
const moment = require('moment')

const ensureAuthenticated = function(req,res,next) {
    if(!req.headers.authorization) {
        throw AuthError("AUTH_ERROR","Your petition cant be validate")
    }

    const payload = jwt.decode(req.headers.authorization, TOKEN_SECRET);

    if(payload.exp <= moment().unix()) {
        throw AuthError("AUTH_ERROR","Your session has experied");
    }
    next();
}

module.exports={
    ensureAuthenticated
}
