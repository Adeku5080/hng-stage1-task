const express= require('express')

const PORT = 3000

const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({
        status : "succesful",
        data:{
            slackUsername : "Adeku Ali",
            backend : true,
            age :25,
            bio : "I am Ali ,a graduate of Electrical Engineering and a full-stack Software Engineer"
        }
    })
})

app.listen(PORT,()=>{
    console.log(`listening at port ${PORT} `)
})