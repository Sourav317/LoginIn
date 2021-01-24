//render the Sign Up page
console.log("inside controller");
module.exports.sign = function(req,res)
{
    return res.end('<h1>HI im in controller</h1>')
}

//render the Sign In page
module.exports.signUp = function(req,res)
{
    return res.render('User_SignUp',{
        title : "Sign Up"
    })
}