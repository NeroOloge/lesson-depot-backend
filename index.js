const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const apiRouter = require("./router/apiRouter");

const app = express();

app.use(express.json());

app.use(cors());

// Logging Middleware
app.use(function (req, res, next) {
  console.log(req.url);
  next();
});

// Static File Middleware
app.use(function (req, res, next) {
  const url = req.url;
  const params = url.split("/").slice(1);
  if (params[0] === "images") {
    try {
      const fileName = path.join(__dirname, ...params);
      if (!fs.existsSync(fileName)) {
        res.writeHead(404, {
          "Content-Type": "text/plain",
        });
        return res.end("Image not found");
      }
      return res.sendFile(fileName);
    } catch (e) {
      console.error(e);
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      return res.end("Internal Server Error");
    }
  }
  next();
});

app.use(apiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Listening on port 3000"));
