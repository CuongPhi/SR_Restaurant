var KH = require('../model/KhachHang');


module.exports.SignUp=(req,res)=>{
    res.render('customer/signup',{csrfToken: req.csrfToken()})
}

module.exports.SignUpPost= (req,res)=>{
   
}
module.exports.Profile=(req,res)=>{
}

module.exports.SignIn= (req,res)=>{
    res.render('customer/signin');
}