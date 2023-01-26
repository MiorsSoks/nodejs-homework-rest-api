const { User } = require('../../models/user')
const {Conflict} = require("http-errors")
const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        throw new Conflict(`Email in use`)
    }
    const result = await User.create({ email, password })
    res.status(201).json({result})
}

module.exports = register