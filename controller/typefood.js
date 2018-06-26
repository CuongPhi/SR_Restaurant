var loaiMonAn = require('../model/LoaiMonAn');exports.adminListTypeFood=(req, res)=>{
    loaiMonAn.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_type_food',  { layout:'../admin/layout.hbs', result });
      })}

exports.adminUpdateTypeFood=(req, res)=>{
    var ma = req.params.id;
    loaiMonAn.findOne({ma_loai :ma}, function(err, result){
      if(err) throw err;
      res.render('admin/update_type_food', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken()});
    })
}
exports.adminPostUpdate=(req, res)=>{
    var ma = req.body.ma.trim();
    
    var ten = req.body.ten.trim();
    loaiMonAn.findOneAndUpdate({ma_loai: ma}, {$set:{ten_loai:ten}}, {new: true}, function(err, result){
      if(err) throw err;
      else{
        console.log(result);
        res.render('admin/update_type_food', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken()});
      }
      
    })
}
exports.adminInsertTypeFood=(req, res)=>{
    res.render('admin/insert_type_food',  { layout:'../admin/layout.hbs', csrfToken:req.csrfToken() });
}
exports.adminInsertPost=(req, res)=>{
    var ma = req.body.ma.trim();
    var ten = req.body.ten.trim();
    loaiMonAn.fin
    loaiMonAn.findAndModify({
        query: { ma_loai: ma },
  update: {
    $setOnInsert: { ten_loai: ten }
  },
  new: true,   // return new doc if one is upserted
  upsert: true
    })
    res.render('admin/list_type_food', { layout:'../admin/layout.hbs', csrfToken:req.csrfToken() });
}
exports.adminDelete=(req, res)=>{
    var ma = req.params.id;
    loaiMonAn.deleteOne({ma_loai : ma}, function(err, result){
        if(err) throw err;
        else console.log("Xoa thanh cong!");
     
    })
    loaiMonAn.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_type_food',  { layout:'../admin/layout.hbs', result });
      })}