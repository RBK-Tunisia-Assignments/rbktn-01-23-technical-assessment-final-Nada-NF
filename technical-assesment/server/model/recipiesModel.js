const connect = require("../database-mysql/index");
//uncomment this line if you want to use promises
//const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
  const sql = `select * from recepie`;
  return connect.query(sql, callback);
};

const addRecipe = (
  Cook_Time,
  Prep_Time,
  Recepie_Name,
  Serves,
  categorie,
  Recepie_Image,
  Recepie_Description,
  Recepie_Ingredients,
  users_user_Id,
  callback
) => {
  const sql =` INSERT INTO recepie (Cook_Time, Prep_Time,Recepie_Name,Serves,categorie,Recepie_Image,Recepie_Description,Recepie_Ingredients,users_user_Id) VALUES (${Cook_Time},${Prep_Time},"${Recepie_Name}",${Serves},"${categorie}","${Recepie_Image}","${Recepie_Description}","${Recepie_Ingredients}",${users_user_Id}) ;
  return connect.query(sql, callback)`;
};
module.exports = { getAll,addRecipe };
