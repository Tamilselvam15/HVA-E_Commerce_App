const User = require("../Models/userModel")

//controller for userCreation
const createNewUser =async (req, res, next) => {
    try {
        const { name, password, email, isAdmin } = req.body
        const user = await User.createUser(name, password, email, isAdmin)
    } catch (err) {
        
    }
}

//controller for login
const signIn = (req, res, next) => {
    
}


module.exports ={createNewUser}