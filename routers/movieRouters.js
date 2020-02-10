const express=require('express')
const {movieController}= require('../controller')

const router=express.Router()

router.get('/get',movieController.getUsers)
router.put('/update/:id',movieController.updateUsers)
router.post('/post',movieController.postUsers)
router.delete('/delete/:id',movieController.deleteUsers)

module.exports=router