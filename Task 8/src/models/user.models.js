const mongoose=require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema =new mongoose.Schema({
    username: {
        type: String,
        trim:true,
        unique:true
    }, password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,

    },
    email: {
        type: String
        , trim: true
        , required: true,
        unique: true,
        lowercase:true,
        
    },
    age: {
        type: Number,
        default: 18,
       
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
    const token = jwt.sign({ _id: user._id.toString() }, 'shenesha')

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