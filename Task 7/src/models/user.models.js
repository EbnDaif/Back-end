const mongoose=require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userSchema =new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim:true,
        unique:true
    }, password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate(value) {
            let password = new RegExp(
              "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
            );
            if (!password.test(value)) {
                 throw new Error('weak password');
            }
        }
    },
    email: {
        type: String
        , trim: true
        , required: true,
        unique: true,
        lowercase:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new error('invalid email')
                
            }
        }
    },
    age: {
        type: Number,
        default: 18,
        validate(value) {
            if (value <= 0)
                throw new error('enter a valid age ')
       
        },
    },
     city: {
            type:String
        }
       
        , tokens: [
            {
                required: true
                ,type:String
            }
        ]
    }
)
userSchema.pre('save', async function () {
    const user = this
    if (user.isModified('password')) {
        user.password=await bcryptjs.hash(user.password,8)
    }
})
 
userSchema.statics.findbycredentials = async (em, pass) => {
    const user = await User.findOne({ email: em })
    if (!user) {
        throw new Error('unable to login')
        
    }
    const ismatch = await bcryptjs.compare(pass, user.password)
    if (!ismatch) {
        throw new Error("unable to login");
    }
    return user
}
userSchema.methods.generatetokens = async function () {
    const user = this
    const token = jwt.sign({ _id:user._id.toString()}, 'shenesha')
    user.tokens = user.tokens.concat(token)
   await user.save()
    return token;
}
userSchema.methods.toJSON = function ()  {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens;
return userObject
    
}

const User = mongoose.model("User", userSchema);

module.exports = User