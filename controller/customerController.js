var KH = require('../model/KhachHang');
var Cart = require('../model/GioHang');
var MonAn = require('../model/MonAn');

module.exports.SignUp=(req,res)=>{
    var messages=req.flash('error');
    res.render('customer/signup',{csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0});
}

module.exports.SignUpPost= (req,res)=>{
   
}
module.exports.Profile=(req,res)=>{
    var messages=req.flash('error');
    if(req.isAuthenticated()){
      //  var _kh = KH.findById()
        res.render('customer/profile',{user:req.user,csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0});
    }
    else {
        res.render('customer/signup',{csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0});
    }
}

module.exports.SignIn= (req,res)=>{
    var messages=req.flash('error');
    res.render('customer/signin',{csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0});

}

module.exports.AddToCart = (req,res,next)=>{
    var messages=req.flash('error');
    var productId= req.params.id;
    console.log(productId);
    var cart =  new Cart(req.session.cart? req.session.cart:{item:{}});
    MonAn.findById(productId,(err,product)=>{
        if(err){
            return res.redirect('/');
        }
        cart.addItem(product,productId);
        req.session.cart=cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
}