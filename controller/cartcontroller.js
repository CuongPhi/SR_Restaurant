var monAn = require('../model/MonAn');
var Cart = require('../model/GioHang');



module.exports.addToCart = (req,res)=>{
    var productId = req.params.id;
    var cart = new Cart (req.session.cart ? req.session.cart : {} );
    console.log(cart);
    monAn.findOne({ma_mon : productId},function(err, result){
        if(err) return res.redirect('/');
        cart.addToCart(result,result.id);
        req.session.cart =cart;
        console.log(req.session.cart);
        res.redirect('/');
    });    
}

module.exports.cartView= (req,res)=>{
    if(!req.session.cart){
        return res.render('shop/cartview', {products: null});

    }
    var cart = new Cart(req.session.cart);
    res.render('shop/cartview', {products: cart.returnArr(), totalPrice: cart.totalPrice})
}