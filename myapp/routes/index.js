var express = require('express');
var router = express.Router();
var path = require('path');
var foodcController = require('../controller/foodcontroller');
var cartController = require('../controller/cartcontroller');
var customerController = require('../controller/customerController');
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', foodcController.loadListFood);

router.get('/single/:id', foodcController.foodDetail);

router.get('/admin',foodcController.adminMainPage);

router.get('/admin/list_food', foodcController.adminListFood);

router.get('/admin/detail_food/:id',foodcController.adminDetailFood);

router.get('/admin/list_type_food', foodcController.adminListTypeFood);

router.get('/admin/update_type_food/:id',foodcController.adminUpdateTypeFood);

router.get('/add-to-cart/:id', cartController.addToCart);

router.get('/user/signup', customerController.SignUp);

router.post('/user/signup', customerController.SignUpPost)

  // router.post('/admin/update_type_food/:id', function(req, res){
  //   var ma = req.body.ma.trim();
    
  //   var ten = req.body.ten.trim();
  //   var giatrims = { $set: {ma_loai: ma, ten_loai: ten} };
  //   loaiMonAn.update(ma,giatrims, function(err, res){
  //     if(err) throw err;
  //     // res.send("<div>Cập nhật thành công</div>");
     
  //   });

  
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
