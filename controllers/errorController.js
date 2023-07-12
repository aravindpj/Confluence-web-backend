
export default function(err,req,res,next){
    let statusCode=err.statusCode || 500
    res.status(statusCode).json({status:err.status,error:err.message})
}