const asyncHandler = require('express-async-handler')
const bcrypt= require ('bcrypt')
const userModel = require('../model/userModel')


//@desc sign up
//@route POST /users
//@access Public
exports.signUp = asyncHandler(async (req, res, next) => {
    const {firstname, lastname, email, username, password} = req.body

    //check email and password 
    if(!email || !password || !username) {
        res.status(400)
        throw new Error("Enter all fields")
    }


    //confirm if user already exists
    const userExists = await userModel.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("Email already registered")
    }


    //hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user 
    const user = await userModel.create({
        firstname,
        lastname,
        email,
        username,
        password: hashedPassword
    })

   if(user){
    res.status(200).json({
        _id : user.id,
        firstname : user.firstname,
        lastname : user.lastname,
        username : user.username,
        email : user.email,
        password: user.password
       
    })
    } else {
        res.status(400)
        throw new Error("Invalid user data inputted")
    } 
    
    // res.send('respond with a resource');
  }) 


exports.signIn = (req, res, next) => {
    res.send('respond with a resource');
  }