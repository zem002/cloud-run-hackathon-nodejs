const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  try{
    const selfLink = req.body._links.self.href;
  }catch(err){
    console.log(req.body);
    const moves = ['F', 'T', 'L', 'R'];
    res.send(moves[Math.floor(Math.random() * moves.length)]);
    return
  }
  console.log(selfLink);
  let arenaDimenions = req.body.arena.dims;
  console.log(arenaDimenions)
  let states = req.body.arena.states;
  console.log(states[selfLink])
  
});

app.listen(process.env.PORT || 8080);
