const Joi = require('joi');
const emailSchema = Joi.string().email({ minDomainAtoms: 2 }).required();
const passwordSchema = Joi.string().min(3).max(50).required();

const singUpUser={
    headers:{
        authtoken: passwordSchema
    },
    body:{
        user: {
            email: emailSchema,
            password: passwordSchema,
        }
    }
}

const logIn={
    headers:{
        authtoken: passwordSchema
    },
    params:{
        email: emailSchema,
        password:passwordSchema
    }
}

module.exports={
    singUpUser,
    logIn
}
