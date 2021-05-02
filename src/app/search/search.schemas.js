const Joi = require('joi');

const licenseTypeSchema={
    params:{
        licenseType: Joi.string().min(3).max(50).required()
    }
}

module.exports={
    licenseTypeSchema
}
