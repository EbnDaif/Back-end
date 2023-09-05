const uservalidation = require('../services/uservalidation')
const validate = function (req, res, next) {
    try {
        let { error } = uservalidation.validate(req.body)
        if (error) {

            let errormsg = error.details[0].message;


        return res.status(403).send({mesaage:errormsg})
        }      
    next()    
    } catch (error) {
        res.status(500).send({mesaage:error.mesaage})
    }
    
}
module.exports=validate