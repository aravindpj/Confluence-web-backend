import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import {fileURLToPath} from "url"
import authRouter from './routes/authRoute.js'
import userRouter from './routes/userRoute.js'
import postRouter from './routes/postRoute.js'
import { register } from "./controllers/authController.js"
import { createPost } from "./controllers/postController.js"
import verifyToken from "./middleware/verifyToken.js"
import User from "./models/User.js"
import {users,posts} from './data/index.js'
import Post from "./models/Post.js"
import globalErrorHandler from './controllers/errorController.js' 
const __filename = fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename);

dotenv.config()
const app=express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit : "30mb" , extended : true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/assets')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage})

app.post('/auth/register',upload.single("picture"),register)
app.post('/posts',verifyToken,upload.single("picture"),createPost)
app.use('/auth',authRouter)
app.use('/users',userRouter)
app.use('/posts',postRouter)

app.use(globalErrorHandler)

const PORT= process.env.PORT || 4001
mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    
    app.listen(PORT,()=>console.log(`server port : ${PORT}`))
    // User.create(users)
    // Post.insertMany(posts)
}).catch(err=>console.log(`${err.message}`))