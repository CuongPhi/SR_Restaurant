var express = require('express');
var router = express.Router();
var monAn = require('../modle/MonAn');
var loaiMonAn = require('../modle/LoaiMonAn');
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  monAn.find(function(err, docs){
    var monAnChuck=[];
    var chucksize = 3;
    for(var i =0; i <docs.length; i+=chucksize){
      monAnChuck.push(docs.slice(i, i+chucksize));
    }
    res.render('index',{title:'Quản lí quán ăn', mon_ans:monAnChuck});
  })
  
});
router.get('/single/:id', function(req, res){
  var ma = req.params.id;
  monAn.findOne({ma_mon : ma},function(err, result){
    if(err) throw err;
    res.render('layouts/single', result);
  });
  });
  router.get('/admin', function(req, res) {
    res.render('admin/main',  { layout:'../admin/layout.hbs' });
  });
  router.get('/admin/list_food', function(req, res) {
    monAn.find(function(err, result){
      if(err) throw err;
      res.render('admin/list_food',  { layout:'../admin/layout.hbs', result });
    })
    
  });
  router.get('/admin/detail_food/:id', function(req, res){
    var ma = req.params.id;
    monAn.findOne({ma_mon : ma}, function(err, result){
      if(err) throw err;
      res.render('admin/detail_food',  { layout:'../admin/layout.hbs',result});
    })
  });
  router.get('/admin/list_type_food', function(req, res){
    loaiMonAn.find(function(err, result){
      if(err) throw err;
      res.render('admin/list_type_food',  { layout:'../admin/layout.hbs', result });
    })
  });
  router.get('/admin/update_type_food/:id', function(req, res){
    var ma = req.params.id;
    loaiMonAn.findOne({ma_loai :ma}, function(err, result){
      if(err) throw err;
      res.render('admin/update_type_food', {layout:'../admin/layout.hbs', result});
    })
  });
//   router.get('/admin/detail_food/:id', function(req, res){
//     var ma = req.params.id;
//     monAn.aggregate([

//       {$lookup:{ from: 'loaiMonAn', localField:'ma_loai', 
//         foreignField:'_id',as:'myCustomResut'}},
// ]).exec((err, result)=>{
//       if (err) {
//           console.log("error" ,err)
//       }
//       if (result) {
//           console.log(result);
//       }
// });
//   })
module.exports = router;
