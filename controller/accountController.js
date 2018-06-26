var Account=require('../model/TaiKhoan');
exports.adminListAccount=(req, res)=>{
    Account.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_account',  { layout:'../admin/layout.hbs', result });
      })      
}
exports.adminUpdateAccount=(req, res)=>{
    var ma = req.params.id;
    Account.findOne({ma :ma}, function(err, result){
      if(err) throw err;
      res.render('admin/update_account', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken() });  
     
    })

}
exports.adminUpdatePost=(req, res)=>{
    var ma= req.params.id;
    var loaitk = req.body.loaitk.trim();
    var tendn = req.body.ten.trim();
    var trangThai=req.body.trangThai.trim();

    Account.findOneAndUpdate({ma: ma}, {$set:{_user:tendn, loaiTK:loaitk, trangThai:trangThai}}, {new: true}, function(err, result){
      if(err) throw err;
      else{
        console.log(result);
        res.render('admin/update_account', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken() });// s laij choo nay
      }
      
    })
}
exports.adminDelete=(req, res)=>{
    var ma = req.params.id;
    Account.deleteOne({ma : ma}, function(err, result){
        if(err) throw err;
        else console.log("Xoa thanh cong!");
     
    })
    Account.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_account',  { layout:'../admin/layout.hbs', result });
      })

}
exports.adminInsert=(req, res)=>{
    res.render('admin/insert_account',  { layout:'../admin/layout.hbs',csrfToken:req.csrfToken() });
}
exports.adminInsertPost=(req, res)=>{
    var ma = req.body.ma.trim();
    var loaitk = req.body.loaitk.trim();
    var tendn = req.body.ten.trim();
    var trangThai=req.body.trangThai.trim();
    var matKhau = req.body.mk.trim();
    var kq='';
    var loaiMoi = new Account({
    ma:ma,
    _user:tendn,
    loaiTK:loaitk,
    trangThai:trangThai,
    pass:matKhau
    })
    
    Account.findOneAndUpdate(
        { ma: ma },
        loaiMoi,
     // return new doc if one is upserted
     { upsert: true, new: true, runValidators: true}, 
     function(err, doc)
     {
        if(err)
        {
            console.log(err);
        }
        else
        {
            kq=doc;
        }
     }
    )
    res.render('admin/insert_account', { layout:'../admin/layout.hbs',csrfToken:req.csrfToken()});
}
exports.adminSignIn=(req, res)=>{
    res.render('admin/signin');
}
var Handlebars = require('handlebars')
Handlebars.registerHelper('select', function(selected, option) {
    return (selected == option) ? 'selected="selected"' : '';
});
Handlebars.registerHelper ("setChecked", function (value, currentValue) {
    if ( value == currentValue ) {
       return "checked";
    } else {
       return "";
    }
 });
 Handlebars.registerHelper("LoaiTaiKhoan", function(currentValue){
     if(currentValue == '1'){
         return "Quản lí";
     } else{
         return "Nhân viên"
     }
 })
 Handlebars.registerHelper("TrangThai", function(currentValue){
     if(currentValue == '1'){
         return "Block"
     }
     else
     {
         return "Unblock"
     }
 })
 Handlebars.registerHelper("Mau", function(currentValue){
     if(currentValue =='1'){
         return "btn btn-danger"
     }else{
        return "btn btn-primary"
     }
     
 })
 Handlebars.registerHelper("Dong", function(currentValue){
    if(currentValue =='1'){
        return "alert-danger"
    }else{
       return "alert-success"
    }
 })