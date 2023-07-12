import { Schema, model} from "mongoose";
import slugify from "slugify";
const userSchema=new Schema({
    firstName:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    lastName:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    slug:String,
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:5
    },
    picturePath:{
        type:String,
        default:""
    },
    friends:{
        type:Array,
        default:[]
    },
    location:String,
    occupation:String,
    viewedProfile:Number,
    impressions: Number,
    createdAt: {
        type: Date,
        default: Date.now,
      },
},{timestamps:true})

userSchema.pre('save',function(next){
    this.slug=slugify(this.firstName,{lower:true})
    next()
})


const User = model("User",userSchema)
export default User
