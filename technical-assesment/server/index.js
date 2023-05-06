const express = require("express");
const app = express();
const cors=require("cors");

app.use(cors());
const recipe= require("./routes/recipiesRoute.js")



const PORT = 4000;
app.use("/",recipe)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

