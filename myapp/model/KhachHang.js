var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/QUAN_LI_NHA_HANG');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');



var khach_hang = new Schema({
 ma_khach_hang: {type:Number,min : 0, required:true},
 ten_khach_hang: {type:String,required:true},
 email: {type:String,default: ''},
 dienthoai: {type:String,minlength :6, maxlength :12},
 ghi_chu: {type:String,default:''},
 diachi: {type:String, default:''},
 userName: {type:String, required: true , minlength: 6},
 passWord: {type:String, required: true,minlength: 8},
 

});
khach_hang.methods.encryptPassWord=function(pass){
    return bcrypt.hashSync(pass,bcrypt.genSaltSync(5),null);
};
khach_hang.methods.decryptPassWord= function(pass){
    return bcrypt.compareSync(pass, this.passWord);
}
module.exports = mongoose.model('KHACH_HANG',khach_hang);


