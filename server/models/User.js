//https://www.youtube.com/watch?v=Iu3Ko3YKMlo&list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy&index=6
const bcrypt = require('bcryptjs');

const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true  // Controla la fecha de reacion y modificacion
})


//Cifra la password del usuario
UserSchema.methods.encryptPassword = async password => {
   const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(password, salt);
}

//Valida si la password ingresada coincide y devuelve true o false
UserSchema.methods.matchPassword= async function(password){
   return await bcrypt.compare(password, this.password)
}


module.exports = model('User', UserSchema)