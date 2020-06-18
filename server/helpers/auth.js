//https://www.youtube.com/watch?v=EdBZQ6IdlYs&list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy&index=19

// valida que el usuario esté autenticado, si no lo está redirecciona a signin

const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
 
  res.redirect('/user/signin');
};

module.exports = helpers;
