const express = require('express')
const router = express.Router()
const MenuItem = require('../models/MenuItem.js')


// POST route to add a menu
router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newMenu = new MenuItem(data);

        // Save the new menu to the database
        const response = await newMenu.save();
        console.log('Menu saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Internal Server Error, could not save the menu' });
    }
})


// GET method to get the menu
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Menu fetched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error, Can not fetch menu' });
    }
})


router.get('/:tasteType', async (req, res) => {
    try {

        const tasteType = req.params.tasteType;
        if (tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy' || tasteType =='salty') {

            const response = await MenuItem.find({ taste: tasteType });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Invalid taste type" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;