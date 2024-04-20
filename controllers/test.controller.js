const Test = require("../models/test.model.js");
const addTest = async (req, res) => {
    const name = req.body.name;
    const newUser=new Test({
        name:name
    });
    const newData = await newUser.save();
    return res.status(201).json(newData);
}
const getAllTests = async (req, res) => {
    try {
        const allTests = await Test.find({});
        return res.status(200).json(allTests);
    } catch (error) {
        return res.status(500).json({ error: error.message || "Internal server error" });
    }
}

module.exports = {
    addTest,
    getAllTests
}