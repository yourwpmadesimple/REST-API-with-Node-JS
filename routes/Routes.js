const fs = require('fs/promises')
const express = require('express')
const cors = require('cors')
const _ = require('lodash')
const { v4: uuid } = require('uuid')
const router = express.Router()


router.use(express.json())
router.use(express.cors())



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
    await fs.writeFile(`data/comments/${id}.txt`, content)
    console.log(id)
    res.status(201).json({
        id: id
    })
})

router.get("/comments/:id", async(req, res) => {
    const id = req.params.id
    let content;

    try {
        content = await fs.readFile(`./data/comments/${id}.txt`, 'utf-8')
    } catch (err) {
        // TODO
        return res.sendStatus(404)
    }
    res.json({
        content: content
    })
})


module.exports = router