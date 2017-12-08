var express = require('express');
var router = express.Router();

//req: 클라이언트 요청정보를 담은 객체
//res: 요청한 클라이어트로 응답을 위한 객체
//next: 다음 로직 수행을 위한 함수명

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET: router.get()
//POST: router.post()
//PUT: router.put()
//DELETE: router.delete()

module.exports = router;
