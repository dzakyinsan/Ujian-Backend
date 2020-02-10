const express=require('express')
const {categoryController}= require('../controller')

const router=express.Router()

router.get('/get',categoryController.getUsers)
router.put('/update/:id',categoryController.updateUsers)
router.post('/post',categoryController.postUsers)
router.delete('/delete/:id',categoryController.deleteUsers)

module.exports=router