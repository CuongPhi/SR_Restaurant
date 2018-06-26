var express = require('express');
var cookieParser = require('cookie-parser');

var router = express.Router();
var passport= require('passport')
var monAn = require('../model/MonAn');
var loaiMonAn = require('../model/LoaiMonAn');
var path = require('path');
var foodcController = require('../controller/foodcontroller');
var typefoodController = require('../controller/typefood.js');
var cartController = require('../controller/cartcontroller.js')
var customerController = require('../controller/customerController');
var accountController = require("../controller/accountcontroller");
var billController  =require("../controller/list_bill");
var csrf = require('csurf');
var csrfProtection = csrf()
// var csfProtect = csrf();
router.use(csrfProtection);

//var parseForm = bodyParser.urlencoded({ extended: false })
// app.use(function (req, res, next) {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   res.locals.csrftoken = req.csrfToken();
//   next();
// });
// 
// var csfProtect = csrf({cookie:true});
// // var csrfProtection = csrf({ cookie: false })
// app.use(router);
// app.use(csfProtect);
// router.use(csfProtect)

/* GET home page. */
router.get('/', foodcController.loadListFood);

router.get('/single/:id', foodcController.foodDetail);

router.get('/admin',foodcController.adminMainPage);

router.get('/admin/list_food', foodcController.adminListFood);

router.get('/admin/detail_food/:id',foodcController.adminDetailFood);
router.get('/admin/update_food/:id', foodcController.adminUpdateFood);
  router.post('admin/update_food/:id', foodcController.adminPostUpdate);
//Các thao tác liên quan tới loại thức ăn
router.get('/admin/list_type_food', typefoodController.adminListTypeFood);

router.get('/admin/update_type_food/:id',typefoodController.adminUpdateTypeFood);

  router.post('/admin/update_type_food/:id', typefoodController.adminPostUpdate);
  router.get('/admin/insert_type_food',typefoodController.adminInsertTypeFood);
  router.post('/admin/insert_type_food',typefoodController.adminInsertPost);
  router.get('/admin/delete_type_food/:id', typefoodController.adminDelete);
//Các thao tác liên quan tới hóa đơn
router.get('/admin/list_bill', billController.adminListBill);
router.get('/admin/delete_bill/:id', billController.adminDeleteBill);

//Các thao tác liên quan tới tài khoản
router.get('/admin/list_account',accountController.adminListAccount);
router.get('/admin/update_account/:id', accountController.adminUpdateAccount);
router.post('/admin/update_account/:id', accountController.adminUpdatePost);
router.get('/admin/delete_account/:id', accountController.adminDelete);
router.get('/admin/insert_account', accountController.adminInsert);
router.post('/admin/insert_account', accountController.adminInsertPost);
//Các thao tác liên quan tới khách hàng
router.get('/admin/list_customer', customerController.adminListCustomer);
router.get('/admin/update_customer/:id', customerController.adminUpdateCustomer);
router.post('/admin/update_customer/:id', customerController.adminUpdatePost);
router.get('/admin/delete_customer/:id', customerController.adminDeleteCustomer);
router.get('/admin/detail_customer/:id', customerController.adminDetailCustomer);

router.get('/customer/signup',customerController.SignUp);
router.post('/customer/signup',passport.authenticate('local.signup',{
   successRedirect:'/customer/signin',
   failureRedirect:'/customer/signup',
   failureFlash:true
}));

router.get('/customer/profile',customerController.Profile )

router.get('/customer/signin',customerController.SignIn)
router.get('/admin/signin', accountController.adminSignIn);
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