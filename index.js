const express = require("express");

const app = express();

// Logging Middleware
app.use(function (req, res, next) {
  console.log(request.url);
  next();
});

app.listen(3000, () => console.log("Listening on port 3000"));
