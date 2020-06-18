const userController = {};
// Models
const passport = require("passport");
const User = require('../models/User');

userController.renderSignUpForm = (req,res) => {
    res.render('user/signup')
}

userController.signUp = async (req,res) => {
    const errors = [];
    const {name, email, password, confirmpassword} = req.body;
    if(password != confirmpassword){
        errors.push({text: 'Passwords do not match.'})
    } if (password.length < 4) {
        errors.push({text: 'Passwords must be at least 4 characters.'})
    } if (errors.length > 0) {
        res.render('/user/signup', {
            errors
        })
    }else{
        const emailUser = await User.findOne({email: email});
        if (emailUser){
            console.log('------> the email is already used');
            res.redirect('/user/signup');
        }else{
            const newUser = new User({name, email, password})
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save(err =>{if(err)return err});
            console.log('------> registered successfully');
            res.redirect('/user/signin');

        }
    }
    res.send('signUp')
}

userController.renderSignInForm = (req, res) => {
    res.render('user/signin');
};
//aca rompe
userController.signIn = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/user/signin"
  });

userController.logOut = (req, res) => {
    req.logout();
    console.log('------------> end session')
    res.redirect("/user/signin");
}

module.exports = userController;