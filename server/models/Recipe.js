//https://www.youtube.com/watch?v=Iu3Ko3YKMlo&list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy&index=6

const {Schema, model} = require('mongoose')

const RecipeSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    ingredients:{
        type: Array,
        required: true
    },
    description:{
        type: String,
        required: false
    }
})

module.exports = model('Recipe', RecipeSchema)