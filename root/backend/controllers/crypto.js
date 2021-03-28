const CryptoModel = require('../models/Crypto.js');
let mongoose = require('mongoose');


const getCryptos = async (req, res) => {
    try {
        const currentCryptos = await CryptoModel.find();
        res.status(200).json(currentCryptos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const addCryptos = async (req, res) => {
    const crypto = req.body;
    const newCrypto = new CryptoModel(crypto);

    try {
        await newCrypto.save();
        res.status(201).json(newCrypto);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateCryptos = async  (req, res) => {
    const { id: _id } = req.params;
    const  crypto  = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that ID');

    const updatedCrypto = await CryptoModel.findByIdAndUpdate(_id, crypto);

    res.json(updatedCrypto);
}

const deleteCryptos = async  (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with that ID');

    await CryptoModel.findByIdAndRemove(id);

    res.json({ message : 'Post deleted successfully' });
}

module.exports = {
    getCryptos,
    addCryptos,
    updateCryptos,
    deleteCryptos,
}