const {StatusCodes, INTERNAL_SERVER_ERROR}=require('http-status-codes');
const info= (req, res)=>{
    return res.status(StatusCodes.OK).json({
        success:true,
        message:"api is live",
        error:{},
        data:{}
    })
}

module.exports={
    info
}