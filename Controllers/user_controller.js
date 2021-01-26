const User = require('../models/mongoose');

//render the Sign Up page
console.log("inside controller");
module.exports.sign = function(req,res)
{
    //return res.end('<h1>HI im in controller</h1>')
    return res.render('User_SignIn',{
        title : "Sign In"
    })
}

//render the Sign In page
module.exports.signUp = function(req,res)
{
    return res.render('User_SignUp',{
        title : "Sign Up"
    })
}


//get the data from the signup form to store in db
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in finding the user in signing up'); return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log('error in creating the user while signing up'); return
                }
                
                console.log('user is created successfully');
                return res.redirect('/au/sign-in')
            })
        } else{
            return res.redirect('back');
        }
    })
}


//sign in and create a seassion for the user
module.exports.createSession = function(req,res){
    //find the user
    User.findOne({email:req.body.email}, function(err,user){
        if(err){console.log('error in finding user in signing in'); return}
        
        if(user){
            //handle password mismatch
                if(user.password != req.body.password){
                    console.log('password mismatch in sign in form');
                    return res.redirect('back');
                }
            //handle session creation( password matches )
                res.cookie('user_id',user.id);
                return res.redirect('/au/check');
        }else{
            //handle user not found
            return res.redirect('back');
        }
    })

}
