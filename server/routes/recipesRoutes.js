
const {Router} = require('../node_modules/express')
const router = Router();

const {
    renderIndex,
    renderRecipes,
    newRecipe,
    renderForm,
    renderEditForm,
    updateRecipes,
    deleteRecipes
}= require('../controllers/recipesController')

const {isAuthenticated} = require('../helpers/auth') // valida que el usuario esté autenticado, si no lo está redirecciona a signin

router.get("/", isAuthenticated,renderIndex)

router.get("/recipes",  isAuthenticated,renderRecipes)


//Create new recipe
router.get("/recipes/add",  isAuthenticated,renderForm)

router.post("/recipes/add",  isAuthenticated,newRecipe)


//Edit recipe
router.get("/recipes/edit/:id",  isAuthenticated, renderRecipes)

router.put("/recipes/edit/:id",  isAuthenticated,updateRecipes)


//Delete recipe pending

// router.delete("/notes/delete/:id",  isAuthenticated, deleteRecipes)


// EXPORT --------------------------
 module.exports= router;
 //---------------------------------