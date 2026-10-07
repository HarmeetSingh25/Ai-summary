import User from "../model/auth.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body
console.log(req.body);

        
        if (!fullname || !email || !password) return res.status(400).json({ message: "All fields are required" })

        const existingUser = await User.findOne({ where: { email } })

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            fullname,
            email,
            password: hashpassword
        })
        console.log(newUser, "new user")
        res.status(201).json({
            message: 'User created successfully',
            user: newUser
        })
    } catch (error) {
        console.log(error, "error from auth controller signup");
        return res.status(500).json({ message: "Unable to create user" })
    }
}
