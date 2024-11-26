import express from "express";
import userCredentials from "./middlewares/logs.js";
import path from "path";
import { join } from "path";

import route from "./EmbededJs/route.js";

const app = express();

// Route params
/*app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Product category (${category}) and Product Id(${id})`);
});

app.listen(8000, (req, res) => {
  console.log("Server Up!");
});
*/

/////////////////////////Query Strings??????????????
/*app.get("/product", (req, res) => {
  const { category, id } = req.query;

  res.send(`product category ${category} and id ${id}`);
});

app.listen(8000, (req, res) => {
  console.log("Server Up!");
});
*/

////////////////////// JSON //////////////
/*app.get("/product", (req, res) => {
  res.json([{ name: "shyam", lname: "shyam", fname: "shyam" }]);
});

app.listen(8000, (req, res) => {
  console.log("Server Up!");
});
*/

/////////////// Middlewres //////////
//whenever we request to the port with different paths this middleware gets triggered and prints in the console.
/*app.use(userCredentials);
app.get("/product", (req, res) => {
  res.send("Hello");
});

app.get("/about", (req, res) => {
  res.send("Hello");
});

app.listen(8000, (req, res) => {
  console.log("Server Up!");
});
*/

/////////////////////////Static files///////////////
// this is a built-in middleware function and it allows us to serve or static files right here okay so I'm going to
// just provide the path like which will be public okay so we just want to provide this public folder we just want to serve
// that into the static middleware like this is a built-in Middle where in express.js it allows us to serve our static files
/*app.use(express.static("./public"));*/

// so which means like we successfully serve our HTML file or css file and also or JavaScript file
// right here so we serve them by using this path module and also in this case you have to specify the send file in
// this case like a send file not just a send and then we have to specify the path.join

/*app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/index.html"));
});

app.listen(8000, (req, res) => {
  console.log("Server Up!");
  console.log(path.join(process.cwd(), "./public/index.html"));
});
*/

/////////////////////////// EJS /////////////////////////////////////
app.set("view engine", "ejs");

// app.use(express.static(join(process.cwd(), "public")));

app.use("/", route);
app.listen(9000, (req, res) => {
  console.log("Server Up!");
});
