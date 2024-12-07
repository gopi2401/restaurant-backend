const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { phone, password } = req.body;
        const user = await User.findUser(phone);
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            const accessToken = jwt.sign(JSON.stringify({ id: user.id, phone: user.phone }), process.env.TOKEN_SECRET || 'SECRET123')
            if (match) {
                delete user.password
                res.status(200).json({
                    message: 'login successfully',
                    accessToken: accessToken,
                    data: user
                });
            } else {
                res.status(401).json({ message: "Invalid Password" });
            }
        } else {
            res.status(404).json({ message: "User not found!" });
        }
    } catch (e) {
        res.status(500).json(
            { message: "internal server error" + e.message }
        )
    }
};


module.exports = { login }