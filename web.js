const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  let selfLink, arenaDimenions, states;
  try{
    selfLink = req.body._links.self.href;
    arenaDimenions = req.body.arena.dims;
    states = req.body.arena.state;
  }catch(err){
    console.log(err);
    res.send('T');
  }
  console.log(selfLink);
  console.log(arenaDimenions)
  console.log(states)
  console.log(states[selfLink])
  const moves = ['F', 'T', 'L', 'R'];
  res.send(moves[Math.floor(Math.random() * moves.length)]);
  
});

app.listen(process.env.PORT || 8080);
