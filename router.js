const express = require('express');
const Router = new express.Router();
const UserController = require('./db/Controller/userController');

// POST method for user registration
// Router.post("/user/register", UserController.userRegister)

const asyncHandler = require('express-async-handler');

Router.post("/user/register", asyncHandler(UserController.userRegister));
Router.get("/userlist", asyncHandler(UserController.getUser));
Router.get("/user/:id", asyncHandler(UserController.singleuser));
Router.post("/userupdate/:id", asyncHandler(UserController.updateuser));
Router.post("/deleteuser/:id", asyncHandler(UserController.deleteuser));
                    
// Uncomment and use these routes if needed
// router.get("/", (req, res) => {
//     res.send('this is router')
// });

// Router.get("/", (req, res) => {
//     res.send('this is RouterPage')
// });