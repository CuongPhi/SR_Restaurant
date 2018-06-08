var passport = require('passport');
var Customer= require('../model/KhachHang');
var LocalStrategy= require('passport-local').Strategy;


passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    Customer.findById(id,(err,user)=>{
        done(err,user);
    });
});


passport.use('local.signup',
    new LocalStrategy({
        usernameField:'userName',
        passwordField: 'passWord',
        passReqToCallback:true
},(req,userName,passWord,done)=>{
    Customer.findOne({'userName':userName},(err,user)=>{
        if(err){
            return done(err);
        }
        if(user){
            return done(null,false,{message:'tài khoản đc sử dụng !'});
        }
        var newCus = new Customer();
        newCus.userName= userName;
        newCus.passWord= newCus.encryptPassWord(passWord);
        newCus.ma_khach_hang= 1;
        newCus.ten_khach_hang="z";
        newCus.save((err,result)=>{
            if(err){
                return done(err);
            }
            return done(null,newCus);
        })
    })
}))