var monAn = require('../model/MonAn');
var loaiMonAn = require('../model/LoaiMonAn');

 exports.loadListFood = function(req,res) {
     monAn.find(function(err, docs){
         if(err) return;
        var monAnChuck=[];
        var chucksize = 3;
        for(var i =0; i <docs.length; i+=chucksize){
         monAnChuck.push(docs.slice(i, i+chucksize));
         }
        res.render('index',{title:'Quản lí quán ăn', mon_ans:monAnChuck});        
    });
};

exports.foodDetail= (req, res)=>{
    var ma = req.params.id;
    monAn.findOne({ma_mon : ma},function(err, result){
    if(err) throw err;
    res.render('layouts/single', result);
  });
}

exports.adminMainPage= (req, res)=>{
    res.render('admin/main',  { layout:'../admin/layout.hbs' });
}

exports.adminListFood=(req, res)=>{
    monAn.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_food',  { layout:'../admin/layout.hbs', result });
      })      
}

exports.adminDetailFood=(req, res)=>{
    var ma = req.params.id;
    monAn.findOne({ma_mon : ma}, function(err, result){
      if(err) throw err;
      res.render('admin/detail_food',  { layout:'../admin/layout.hbs',result});
    })
}

exports.adminListTypeFood=(req, res)=>{
    loaiMonAn.find(function(err, result){
        if(err) throw err;
        res.render('admin/list_type_food',  { layout:'../admin/layout.hbs', result });
      })}

exports.adminUpdateTypeFood=(req, res)=>{
    var ma = req.params.id;
    loaiMonAn.findOne({ma_loai :ma}, function(err, result){
      if(err) throw err;
      res.render('admin/update_type_food', {layout:'../admin/layout.hbs', result});
    })
}