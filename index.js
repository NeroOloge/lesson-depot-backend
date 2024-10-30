const express = require("express");

const app = express();

// Logging Middleware
app.use(function (req, res, next) {
  console.log(request.url);
  next();
});

// Static File Middleware
app.use(function (req, res, next) {
  const url = req.url;
  const params = url.split("/").slice(1);
  if (params[0] === "images") {
    try {
      const fileName = params.join("/");
      const file = fs.readFileSync(fileName);
      return res.end(file.toString());
    } catch (e) {
      return res.status(404).end("Image not found");
      next();
    }
  }
  next();
});

app.listen(3000, () => console.log("Listening on port 3000"));
