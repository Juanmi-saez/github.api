const service = require('./auth.service')

function singUpUser(req,res,next){
    service.emailSingup(req.body.user,req.headers.authtoken)
        .then((token) => res.status(201).json(token))
        .catch(err => next(err))
}

function logIn(req,res,next){
    service.emailLogIn(req.params.email,req.params.password,req.headers.authtoken)
        .then((token) => res.status(201).json(token))
        .catch(err => next(err))
}


module.exports={
    singUpUser,
    logIn
}
