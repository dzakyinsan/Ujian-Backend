const express=require('express')
const app=express()
const BodyParser=require('body-parser')
const cors=require('cors')

const PORT=2024

app.use(cors())

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json())
app.use(express.static('public'))

app.get('/',(req,res)=>{
    return res.status(200).send('<h1>Ini Home Page</h1>')
})

const {
    movieRouters,
    categoryRouters,
    movcatRouters
}=require('./routers')

app.use('/movie',movieRouters)
app.use('/category',categoryRouters)
app.use('/movcat',movcatRouters)


app.listen(PORT,()=>console.log(`aktif di port ${PORT}`))
