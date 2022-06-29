![Node JS REST API](https://github.com/yourwpmadesimple/REST-API-with-Node-JS/blob/master/images/NodeRestAPI.png)

# Building a REST API with Node JS

## Installation

### 1. Initiate Node JS application
```javascript
npm init -y
```
#### Package.json
```json
{
  "name": "custom-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yourwpmadesimple/REST-API-with-Node-JS.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/yourwpmadesimple/REST-API-with-Node-JS/issues"
  },
  "homepage": "https://github.com/yourwpmadesimple/REST-API-with-Node-JS#readme"
}
```

### 2. Install Dependencies
> Below is the list of dependacies you'll need to install for this project
- Express
- Cors
- Lodash
- UUID
```javascript
npm i express cors lodash uuid
```

### 3. Load all Dependencies in index.js
> Create your index.js file
```javascript
const fs = require('fs/promises')
const express = require('express')
const cors = require('cors')
const _ = require('lodash')
const { v4: uuid } = require('uuid')
```

### 4. Setup API Server
```javascript
const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("API Server is running...")
})
```

### 5. Setup Routes
> Create a routes directory and Routes.js file
```javascript
const express = require("express");
const route = express();

const Routes = () => {
  route.get("/outfit", (req, res) => {
    res.send("This is working");
  });
};

module.exports = {
  Routes,
};
```
> Inclued Routes in index.js
```javascript
// Routes 
const { Routes } = require("./routes/Routes");
Routes();
```

### 6. Create Post Endpoit Route
> Utilizing fs, lodash and uuid
```javascript
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
```

### 7. Get Comments by ID
```javascript
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
```