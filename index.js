

var express = require('express')
var app = express(); 

//app.use(express.json())

const PORT = 3000;

const TOKEN = 'projecttwo';

//Test ONE:
app.get('/test_one', function (req, res) {
  const { fruit, cake } = req.query
  
  res.json({
    message: {
      fruit,
      cake
    }
  })
});

//Test TWO://
app.post('/test_two',(req, res) => {

  const aFruit = req.body.fruit;
  const aCake =  req.body.cake;
  

  return res.json({
     message: `i love to eat ${aFruit} with ${aCake}`});

});
app.use(express.json());

//Test THREE://
app.get('/test_three',(req, res) => {
  
  const token = req.headers.authorization.replace('Bearer ', '');
  
  if(TOKEN === token) {

    return res.json({message:`you sent ${aFruit} and ${aCake}, but I only eat ${aCake}!`});

  } else {

    return res.json({ message: "unauthorized" });
  }



});

//Test FOUR://
app.postgit ('/test_four', (req,res) => {

});

//Test FIVE://
app.get('/test_five', (req,res) => {

});


app.listen(PORT, () => console.log(`I AM LISTENING on ${PORT}`));
console.log('Server started! At http://localhost:' + PORT);

