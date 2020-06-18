//https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369
//https://www.youtube.com/watch?v=AknTRNvX9rA&list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy&index=5


// seteamos configuración con DB en mongo atlas

const mongoose = require('mongoose');
const uri = `mongodb+srv://myRecipesApp:3Vi4tgBQqbmM6fTU@cluster0-xzaej.mongodb.net/recipesDB?retryWrites=true&w=majority1`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true

})
.then(db => console.log("DB is connected"))
.catch(err => console.log(err))


module.exports = mongoose;