var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/QUAN_LI_NHA_HANG');
var Schema = mongoose.Schema;
 
var cthoadon = new Schema({
 _idmahd: {type: Number,min : 0,  default: 0, required:true},
 ma_mon: {type:Number,min :0, default: 0, required:true},
 so_luong: {type:Number,min :1, max : 20,default:0},
 don_gia: {type:Number,default: 0}
});
module.exports = mongoose.model('CHI_TIET_HOA_DON',cthoadon);
module.exports.create({
    _idmahd:1,
    ma_mon :1,
   so_luong: 1,
   don_gia: 200000
})