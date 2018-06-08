var KH = require('../model/KhachHang');


module.exports.SignUp=(req,res)=>{
    var messages=req.flash('error');
    res.render('customer/signup',{csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0})
}

module.exports.SignUpPost= (req,res)=>{
   
}
module.exports.Profile=(req,res)=>{
}

module.exports.SignIn= (req,res)=>{
    var messages=req.flash('error');
    res.render('customer/signin',{csrfToken: req.csrfToken(), messages:messages, hasError:messages.length>0})

}