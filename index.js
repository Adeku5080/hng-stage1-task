const express= require('express')
const cors = require('cors')

const PORT = 3000

const app = express()

app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).json({
        status : "succesful",
        data:{
            slackUsername : "onimisi",
            backend : true,
            age :25,
            bio : "I am Ali ,a graduate of Electrical Engineering and a full-stack Software Engineer"
        }
    })
})

app.listen(PORT,()=>{
    console.log(`listening at port ${PORT} `)
})