const {Router} = require('express')
const router = Router();

const {renderSignUpForm,
        renderSignInForm,
        signIn,
        signUp,
        logOut
        }=require('../controllers/userController')

router.get('/user/signup', renderSignUpForm);

router.post('/user/signup', signUp);

router.get('/user/signin', renderSignInForm);

router.post('/user/signin', signIn);

router.get('/user/logout', logOut);



// EXPORT --------------------------
module.exports= router;
//---------------------------------