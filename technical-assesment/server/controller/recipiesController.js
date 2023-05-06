
const Recepie = require( "../model/recipiesModel.js")

const getRecipe = (req, res) => {
  Recepie.getAll((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};
const postRecipe=(req,res)=>{
  Recepie.create(req.body,(err,result)=>{
    if(err){
      res.json(err);
    }else{
      res.json(result);
    }
  })
}
module.exports = {
  getRecipe,postRecipe,
};
