var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/QUAN_LI_NHA_HANG');
var Schema = mongoose.Schema;
 
var khach_hang = new Schema({
 ma_khach_hang: {type:Number,min : 0, required:true},
 ten_khach_hang: {type:String,required:true},
 email: {type:String,default: ''},
 dienthoai: {type:String,minlength :6, maxlength :12},
 ghi_chu: {type:String,default:''},
 diachi: {type:String, default:''}
});
module.exports = mongoose.model('KHACH_HANG',khach_hang);
module.exports.create({
    ma_khach_hang:1,
    ten_khach_hang :'abc',
    email:'kdng',
    dienthoai:'0938035734',
    ghi_chu:'khách hàng thân thiết',
    diachi:'quận 1'
})