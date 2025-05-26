const userModel = require('../models/userModel')


const getAll = async (req, res) => {
    const funcionarios = await userModel.getAll();
    return res.status(200).json(funcionarios);
};

const postUser = async (req, res) => {
    const newUser = await userModel.postUser(req.body);
    return res.status(201).json(newUser)
}

module.exports = {
    getAll,
    postUser
};