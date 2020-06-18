const mongoose= require('../database')
const Recipe = require('../models/Recipe')
const bodyParser = require('body-parser') // Para solucionar el undefined en la req del body


const recipesController = {};


recipesController.renderIndex = (req,res)=>{
    res.render("home")
  }

  //GET all recipes
  recipesController.renderRecipes = async (req,res)=>{
    const recipes = await Recipe.find({}).lean(); //.find({}).lean() resuelve el problema --> Handlebars: Access has been denied to resolve the property "title" because it is not an "own property" of its parent.
    res.render('recipes', {recipes})
  
  }

  //POST new recipe
  recipesController.newRecipe = async (req,res)=>{
    const {title, ingredients, description} = req.body;

    const newRecipe= new Recipe({title:title, ingredients:ingredients, description:description})
    await newRecipe.save(err =>{if(err)return err});
    const recipes = await Recipe.find({}).lean();
    req.flash('success_msg', 'Recipe added successfully')
    res.render('recipes', {recipes})
  }

  recipesController.renderForm = (req,res)=>{ 
    res.render("form")
  }

  //Edit recipe
  recipesController.renderEditForm = (req,res)=>{
    res.send(" render edit recipe")
  }

  recipesController.updateRecipes = (req,res)=>{
    res.send(" update recipe ")
  }


  recipesController.deleteRecipes = (req,res)=>{
    res.send(" delete recope ")
  }



   module.exports = recipesController;



// createNew = (title, ingredients,description,result) =>{
//      if(title){
//       if(ingredients){

//         result({status: 200, message:"ok"})
//       }else{
//         result({status: 400, message:"Debes agregar al menos un ingrediente"})
//       }
//     }else{
//     result({status: 400, message:"El titulo es requerido"})
//     }  
// }

