const authRepository= require('./auth.repository')
const moment = require('moment')
const jwt = require('jwt-simple');
const {Conflict} =require('../../common/errors')
const {TOKEN_SECRET} = require('../../config')

function createToken(user,authToken){
    var payload = {
        sub: user.email, iat: moment().unix(), exp: moment().add(1, "days").unix(),authtoken:authToken
    };
    return jwt.encode(payload, TOKEN_SECRET);
}
async function emailSingup(user,authToken){
   const userDb= await authRepository.getUser(user.email);
   if(userDb){
       throw new Conflict('USER_ALREADY_EXIST', `The email ${user.email} already exist`);
   }
    await authRepository.registerUser(user)
    return createToken(user,authToken)
}

async function emailLogIn(email, password,authToken){
    const userDb = await authRepository.getUserAndPassword(email,password)
    if(userDb == null){
        throw new Conflict('USER_NOT_EXIST', `your username and password are incorrect`);
    }
    return createToken(userDb,authToken)
}



module.exports={
    emailSingup,
    emailLogIn
}
