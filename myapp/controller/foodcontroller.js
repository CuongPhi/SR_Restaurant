var monAn = require('../model/MonAn');
var Handlebars = require('handlebars');

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
var loaiMonAn = require('../model/LoaiMonAn');
function loaiMonAn()
{
    var kq;
    loaiMonAn.find(function(err, result){
        if(err) throw err;
        else return kq =result;
    })
    return kq;
}
exports.adminUpdateFood=(req, res)=>{
    var ma = req.params.id;
    monAn.findOne({ma_loai :ma}, function(err, result){
      if(err) throw err;
      loaiMonAn.find(function(err, kq)
    {
        if(err) throw err;
        res.render('admin/update_food', {layout:'../admin/layout.hbs', result, kq, csrfToken:req.csrfToken() });
    })
     
    })

}
exports.adminPostUpdate=(req, res)=>{
    var ma = req.body.ma.trim();
    var ten = req.body.ten.trim();
    var ndct = req.body.ndct.trim();
    var ndtt = req.body.ndtt.trim();
    var gia = req.body.gia.trim();
    var gkmai = req.body.giakmai.trim();
    var loaiMonAn = req.body.lsp.trim();
    loaiMonAn.findOneAndUpdate({ma_loai: ma}, {$set:{ten_loai:ten}}, {new: true}, function(err, result){
      if(err) throw err;
      else{
        console.log(result);
        res.render('admin/update_food', {layout:'../admin/layout.hbs', result, csrfToken:req.csrfToken() });// s laij choo nay
      }
      
    })
}
Handlebars.registerHelper('select', function( value, options ){
    var $el = $('<select />').html( options.fn(this) );
    $el.find('[value="' + value + '"]').attr({'selected':'selected'});
    return $el.html();
});

