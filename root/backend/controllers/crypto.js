const CryptoModel = require('../models/Crypto.js');


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

const deleteCryptos = (req, res) => {

    res.send("crypto deleted");
}

module.exports = {
    getCryptos,
    addCryptos,
    deleteCryptos,
}