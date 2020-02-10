const express=require('express')
const {movcatController}= require('../controller')

const router=express.Router()

router.get('/get',movcatController.getUsers)
router.post('/post',movcatController.postUsers)
router.delete('/delete/:id',movcatController.deleteUsers)

module.exports=router