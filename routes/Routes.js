const fs = require('fs/promises')
const express = require('express')
const _ = require('lodash')
const { v4: uuid } = require('uuid')
const router = express.Router()


router.use(express.json())


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
router.post('/comments', async(req, res) => {
    const id = uuid()
    const content = req.body.content

    if (!content) {
        return res.sendStatus(400)
    }

    await fs.mkdir("data/comments", { recursive: true })
    await fs.writeFile(`data/comments/${id}.text`, content)

    res.sendStatus(201)
})


module.exports = router