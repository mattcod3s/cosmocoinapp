const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users.js');
 
const signin = async (req, res) => {
    const {emailAddress, password} = req.body;

    try {
        const existingUser = await User.findOne({ emailAddress });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials"});

        const token = jwt.sign({emailAddress : existingUser.emailAddress, id: existingUser._id }, `${process.env.TOKEN_SECRET}`, { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." })
    }
} 

const signup = async (req, res) => {
    const {firstName, lastName, emailAddress, password} = req.body;
 
    try {
        const existingUser = await User.findOne({ emailAddress });

        if(existingUser) return res.status(400).json({ message: "User already exists." })

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ emailAddress, password: hashedPassword, firstName, lastName});

        const token = jwt.sign({emailAddress : result.emailAddress, id: result._id }, `${process.env.TOKEN_SECRET}`, { expiresIn: "1h" });
        
        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." })
    }
}

module.exports = {
    signin, signup
}