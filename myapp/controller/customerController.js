var KH = require('../model/KhachHang');


module.exports.SignUp=(req,res)=>{
    res.render('customer/signup',{csrfToken: req.csrfToken()})
}


module.exports.SignUpPost= (req,res)=>{
    res.redirect('/');
}