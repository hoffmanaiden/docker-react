const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {"id": 1, "itemName": "this is item 1"},
    {"id": 2, "itemName": "this is item two"},
    {"id": 3, "itemName": "this is item THREE"},
    {"id": 4, "itemName": "this is item 4"},
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})