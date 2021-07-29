const express = require("express");
const path = require("path");
const app = express();
const portNumber = 9966;
const sourceDir = path.resolve(__dirname, "../dist");

app.use(express.static(sourceDir));

app.get("/*", (req, res) => {
  res.sendFile(sourceDir + "/index.html");
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
