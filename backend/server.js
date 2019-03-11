let express = require('express');
let app = express();
let bodyParser = require('body-parser')
const data = require('./data')
app.use(bodyParser.raw({ type: "*/*" }))

app.post('/search', function (req, res) {

  let parsed = JSON.parse(req.body)
  let searchWord = parsed.query
  let results = data.filter(function (item) {
    return item.description.includes(searchWord)
  })
  res.send(JSON.stringify(results))
})
app.get('/all', (req, res) => res.json(data));

app.listen(4011, function () {
  console.log('running on 4011');
})