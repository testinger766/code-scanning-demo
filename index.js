const express = require("express");
const escape = require("escape-html");
const app = express();

const site = await Bun.file("./index.html").text();

app.get("/", async (req, res) => {
  let greet = site.replace("%%_USER_NAME%%", escape(req.query.name));
  res.send(greet);
});

app.listen(8080, () => {
  console.log("The webpage is live on http://localhost:8080 :)");
});
