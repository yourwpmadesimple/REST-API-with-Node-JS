const express = require('express')
const _ = require('lodash')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('index endpoint')
})

router.get('/outfit', (req, res) => {
    const tops = ["Black", "White", "Orange", "Navy"];
    const jeans = ["Grey", "Dark Grey", "Black", "Navy"];
    const shoes = ["White", "Grey", "Black"];

    res.json({
        top: _.sample(tops),
        jeans: _.sample(jeans),
        shoes: _.sample(shoes)
    })
})
router.post('/comments', (req, res) => {
    res.json({
        content: "This is a comment"
    })
})


module.exports = router