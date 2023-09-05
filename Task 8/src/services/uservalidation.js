const joi = require('joi')


const NewUserSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().pattern(new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
    )).min(8), email: joi.string().email().required()
    ,age: joi.string()
    

})
module.exports=NewUserSchema