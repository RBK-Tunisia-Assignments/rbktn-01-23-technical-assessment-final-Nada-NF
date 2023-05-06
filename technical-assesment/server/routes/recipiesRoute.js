const express = require("express");
const router = express.Router();
const route=require("../controller/recipiesController");



router.get("/",route.getRecipe);
router.post("/save",route.postRecipe)



module.exports = router;
