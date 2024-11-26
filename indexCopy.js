import express from "express";
import students from "./routes/student.js";
import teachers from "./routes/teacher.js";

const app = express();
const app1 = express();
const app2 = express();
const app3 = express();
const app4 = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express...");
});
app.get("/contact", (req, res) => {
  res.send("Contact 😊 to Express...");
});
app.get("/about", (req, res) => {
  res.send("About to Express...");
});

app.listen(8002, () => {
  console.log("Server Started");
});

//********************************************************** */
//Advance Routing...
//string pattern path
app1.get("/ab?cd", (req, res) => {
  res.send("Press acd/abcd...");
});

//Regular expression - users/1234
app1.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send("Regular Expressions...");
});

app1.listen(8003, () => {
  console.log("Server Started");
});

/**************************REQ RES************************** */
app2.get(
  "/double-cb",
  (req, res, next) => {
    console.log("first CB");
    next();
  },
  (req, res) => {
    res.send("Double");
  }
);
app2.listen(8004, () => {
  console.log("Server Started");
});

/***************Post man******************** */

// app3.get("/get", (req, res) => {
//   res.send("<h1> Get </h1>");
// });

// app3.post("/post", (req, res) => {
//   res.send("<h1>Post</h1>");
// });
// app3.put("/put", (req, res) => {
//   res.send("<h1> Put </h1>");
// });

// app3.delete("/delete", (req, res) => {
//   res.send("<h1>Delete</h1>");
// });
// app3.patch("/patch", (req, res) => {
//   res.send("<h1>Patch</h1>");
// });

//Refactor code
app3
  .route("/student")
  .get((req, res) => res.send("All Students..."))
  .post((req, res) => res.send("Add Students..."))
  .put((req, res) => res.send("Update Students..."))
  .delete((req, res) => res.send("Delete Students..."));

app3.listen(8005, () => console.log("PostMan testing!"));

/****************Advance Routers************** */
// First check this link out 👇
// http://expressjs.com/en/5x/api.html#router

// 1. Create routes folder and put your routes in a seperate file.
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router from a specific file
// 5. Import route in index.js file
// 6. use the (app.use) built-in middleware & provide your routes.

app4.use("/students", students);
app4.use("/teachers", teachers);

app4.listen(8006, () => console.log("Advance Routing!"));
