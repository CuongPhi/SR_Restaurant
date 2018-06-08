var express = require('express');
var router = express.Router();
var passport= require('passport')
var monAn = require('../model/MonAn');
var loaiMonAn = require('../model/LoaiMonAn');
var path = require('path');
var foodcController = require('../controller/foodcontroller');
var typefoodController = require('../controller/typefood.js');
var cartController = require('../controller/cartcontroller.js')
var customerController = require('../controller/customerController');
var csrf = require('csurf');
var csfProtect = csrf();
router.use(csfProtect);



/* GET home page. */
router.get('/', foodcController.loadListFood);

router.get('/single/:id', foodcController.foodDetail);

router.get('/admin',foodcController.adminMainPage);

router.get('/admin/list_food', foodcController.adminListFood);

router.get('/admin/detail_food/:id',foodcController.adminDetailFood);

router.get('/admin/list_type_food', typefoodController.adminListTypeFood);

router.get('/admin/update_type_food/:id',typefoodController.adminUpdateTypeFood);

  router.post('/admin/update_type_food/:id', typefoodController.adminPostUpdate);
  router.get('/admin/insert_type_food',typefoodController.adminInsertTypeFood);
  router.post('/admin/insert_type_food/', typefoodController.adminInsertPost);
  
router.get('/customer/signup',customerController.SignUp);
router.post('/customer/signup',passport.authenticate('local.signup',{
   successRedirect:'/customer/signin',
   failureRedirect:'/customer/signup',
   failureFlash:true
}));

router.get('/customer/profile',customerController.Profile )

router.get('/customer/signin',customerController.SignIn)

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