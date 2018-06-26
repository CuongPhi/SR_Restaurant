var KH = require('../model/KhachHang');


module.exports.SignUp=(req,res)=>{
    res.render('customer/signup',{csrfToken: req.csrfToken()})
}

module.exports.SignUpPost= (req,res)=>{
   
}
module.exports.Profile=(req,res)=>{
}

module.exports.SignIn= (req,res)=>{
    res.render('customer/signin');
}
exports.adminListCustomer=(req, res)=>{
    KH.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_customer',  { layout:'../admin/layout.hbs', result });
      })  
}
exports.adminDetailCustomer=(req, res)=>{
    var ma= req.params.id;
    KH.findOne({ma_khach_hang : ma}, function(err, result){
        if(err) throw err;
        res.render('admin/detail_customer',  { layout:'../admin/layout.hbs',result});
      })
}
exports.adminUpdateCustomer=(req, res)=>{
    var ma = req.params.id;
    KH.findOne({ma_khach_hang :ma}, function(err, result){
      if(err) throw err;
      res.render('admin/update_customer', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken() });  
     
    })
}
exports.adminUpdatePost=(req, res)=>{
    var ma= req.params.id;
    var trangThai=req.body.trangThai.trim();

    KH.findOneAndUpdate({ma_khach_hang: ma}, {$set:{trangThai:trangThai}}, {new: true}, function(err, result){
      if(err) throw err;
      else{
        console.log(result);
        res.render('admin/update_customer', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken() });// s laij choo nay
      }
      
    })
}
exports.adminDeleteCustomer=(req, res)=>{
    var ma = req.params.id;
    KH.deleteOne({ma : ma}, function(err, result){
        if(err) throw err;
        else console.log("Xoa thanh cong!");
     
    })
    KH.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_customer',  { layout:'../admin/layout.hbs', result });
      })
}
var Handlebars=require('handlebars');
Handlebars.registerHelper("MauDong", function(currentValue){
    if(currentValue =='VIP'){
        return "alert-danger"
    }else{
       return "alert-success"
    }
 })
 Handlebars.registerHelper ("setChecked", function (value, currentValue) {
    if ( value == currentValue ) {
       return "checked";
    } else {
       return "";
    }
 });
 
Handlebars.registerHelper("Mau", function(currentValue){
    if(currentValue =='VIP'){
        return "btn btn-danger"
    }else{
       return "btn btn-primary"
    }
    
})