var express = require('express');
var getList = require('../public/javascripts/data');
var orderDonut = require('../public/javascripts/order');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/test",(req,res) => {
  res.send('Testing...');
});

router.get("/api/donut/state=list",(req,res) => {
  getList().then(data => {
    res.send(data);
  }).catch(error => {
    res.send(error.message);
  })
});

router.get("/api/donut/order/:id",(req,res) => {
  orderDonut().then(json => {
    var validateId = false;
    for(let i = 0; i < json.length; i++){
      let curObj = json[i];
      if(req.params.id == curObj.id){
        validateId = true;
        let data = `ID: ${curObj.id}, 주문 대상: ${curObj.name}, 주문되었습니다!`;
        res.send(data);
      }
    }

    if(validateId != true){
      let data = "해당 ID에 해당하는 주문 대상이 존재하지 않습니다."
      res.send(data);
    }
    
  });
});

module.exports = router;
