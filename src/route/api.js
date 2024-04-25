const express = require('express')
const UserController = require('../controller/UserController')
const ProfileController = require('../controller/ProfileController')
const ToDoListController = require('../controller/ToDoListController')
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");



const router=express.Router()




//mongoose

router.post('/insertuser',UserController.InsertData)


// registration routes
router.post('/createprofile',ProfileController.createprofile)


//user login routes
router.post('/userlogin',ProfileController.userlogin)


//select profile routes
router.get('/selectprofile',AuthVerifyMiddleware,ProfileController.selectprofile)



//create todolist routes
router.post('/createtodolist',AuthVerifyMiddleware,ToDoListController.createtodolist)

//select todo list routes
router.get('/selecttodolist',AuthVerifyMiddleware,ToDoListController.selecttodo)



//update todo list routes
router.get('/updatetodo',AuthVerifyMiddleware,ToDoListController.updatetodo)




//delete todo list routes
router.get('/deletetodo',AuthVerifyMiddleware,ToDoListController.deletetodo)
















module.exports=router