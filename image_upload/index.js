const express = require("express");
const app = express();

const Upload = require("./routes/index");

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type,Accept,Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
  next();
});

app.use("/image", Upload);

app.listen(3001, () => {
  console.log(`server is running...`);
});
